<template>
  <div class="comment component">
    <div class="div card text center">
      <div class="row card blog" v-if="comment.creator">
        <div class="text-right absolute top right p-2 z-2">
          <i
            class="fas fa-times text-danger action"
            @click="deleteComment"
            v-if="comment.creator.email == state.user.email"
          ></i>
          <h2>{{ comment.body }}</h2>
          <h5>-{{ comment.creator.email }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'CommentComponent',
  props: {
    blog: { type: Object, required: true },
    comment: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    onMounted(async () => {
      blogsService.getCommentsByBlogId(props.blog.id)
    })
    return {
      state,
      deleteComment() {
        blogsService.deleteComment(props.comment.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
