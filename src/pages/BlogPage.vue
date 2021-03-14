<template>
  <div class="home container">
    <div class="row">
      <div class="col text-center">
        <h1>Blogs</h1>
      </div>
    </div>
    <div class="row">
      <!-- FIXME isAuthenticated v-if-->
      <form class="form-inline">
        <div class="form-group">
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder="Title"
            aria-describedby="helpId"
            v-model="state.newBlog.title"
          />
          <div class="form-group">
            <input
              type="text"
              name="body"
              id="body"
              class="form-control"
              placeholder="Body"
              aria-describedby="helpId"
              v-model="state.newBlog.body"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="createBlog()">
            New Blog
          </button>
        </div>
      </form>

      <div class="row">
        <BlogComponent
          v-for="blogData in state.blogs"
          :key="blogData.id"
          :blog="blogData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import BlogComponent from '../components/BlogComponent'

export default {
  name: 'BlogPage',
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.blogs),
      newBlog: {
        title: '',
        body: ''
      }
    })
    onMounted(() => {
      blogsService.getAll()
    })
    return {
      state,
      async createBlog() {
        await blogsService.createBlog(state.newBlog)
        state.newBlog = {}
      }
    }
  },
  components: {
    BlogComponent
  }
}
</script>

<style lang="scss" scoped>
</style>
