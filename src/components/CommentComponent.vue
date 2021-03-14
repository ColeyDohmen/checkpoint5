<template>
  <div class="comment component">
    <div class="div card text center">
      <h2>{{ comment.body }}</h2>
      <h3>hey</h3>
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
    blog: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    onMounted(async () => {
      blogsService.getCommentsByBlogId(props.blog.id)
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
