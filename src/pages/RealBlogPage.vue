<template>
  <div class="component">
    <h1>Hullo</h1>
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
      comments: computed(() => AppState.comments)
    })
    onMounted(() => {
      blogsService.getAllComments(route.params.id)
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
