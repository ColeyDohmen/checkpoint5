<template>
  <div class="component container text-center">
    <h1></h1>
    <h1>{{ state.activeBlog.title }}</h1>
    <h3>{{ state.activeBlog.body }}</h3>

    <form class="form-inline" v-if="state.user.isAuthenticated">
      <div class="form-group">
        <div class="form-group">
          <input
            type="text"
            name="body"
            id="body"
            class="form-control"
            placeholder="Body"
            aria-describedby="helpId"
            v-model="state.newComment.body"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="createComment()">
          New Comment
        </button>
      </div>
    </form>
    <CommentComponent
      v-for="commentData in state.comments"
      :key="commentData.id"
      :comment="commentData"
    />
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import { useRoute } from 'vue-router'
export default {
  name: 'RealBlogPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user),
      comments: computed(() => AppState.comments),
      activeBlog: computed(() => AppState.activeBlog),
      blog: computed(() => AppState.blog),
      // activeBlogs: {
      //   title: '',
      //   body: ''
      // },
      newComment: {
        body: ''
      }
    })
    onMounted(async () => {
      await blogsService.getAllComments(route.params.id)
      await blogsService.getBlogById(route.params.id)
    })
    return {
      state,
      async createComment() {
        state.newComment.blog = route.params.id
        await blogsService.createComment(state.newComment)
        state.newComment = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
