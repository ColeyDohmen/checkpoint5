<template>
  <div class="blogComponent container">
    <div class="row card blog">
      <div class="col-4">
        <h2 class="card-title">
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
export default {
  name: 'BlogComponent',
  props: {
    blog: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
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
