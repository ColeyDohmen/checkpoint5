<template>
  <div class="component">
    <h1>Hullo</h1>
    <!-- <h2>{{ activeBlog.title }}</h2>
    <h3>{{ activeBlog.body }}</h3> -->
    <form class="form-inline">
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
      comments: computed(() => AppState.comments),
      activeBlog: computed(() => AppState.activeBlog),
      activeBlogs: {
        title: '',
        body: ''
      },
      newComment: {
        body: ''
      }
    })
    onMounted(() => {
      blogsService.getAllComments(route.params.id)
      blogsService.getBlogById(route.params.id)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
