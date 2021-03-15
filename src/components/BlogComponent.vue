<template>
  <div class="blogComponent container">
    <router-link :to="{ name: 'RealBlogPage', params: { id: blog.id } }">
      <div class="row card blog" v-if="blog.creator">
        <div class="text-right absolute top right p-2 z-2">
          <i
            class="fas fa-times text-danger action"
            @click="deleteBlog"
            v-if="blog.creator.email == state.user.email"
          ></i>
          <div class="card shadow">
            <div class="col-12 text-center">
              <h3 class="card-title">
                {{ blog.title }}
              </h3>

              <p v-if="blog.creator">
                {{ blog.creator.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'BlogComponent',
  props: {
    blog: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state,
      deleteBlog() {
        blogsService.delete(props.blog.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
