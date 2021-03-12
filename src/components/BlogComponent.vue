<template>
  <div class="blogComponent container">
    <div class="row card blog">
      <i class="fas fa-times text-danger action" @click="deleteBlog"></i>
      <div class="col-4">
        <h2 class="card-title">
          <!-- <div
            class="text-right absolute top right p-2 z-2"
            v-if="blog.creator.email == state.user"
          > -->

          <!-- </div> -->
          {{ blog.title }}
        </h2>

        <h4 v-if="blog.creator">
          {{ blog.creator.email }}
        </h4>
      </div>
    </div>
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
      account: computed(() => AppState.account)
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
