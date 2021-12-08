<template>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <h1>Systems</h1>
    <h6>{{ systems }}</h6>
    <h1>Appliances</h1>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { systemsService } from '../services/SystemsService'

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await systemsService.getAllSystems()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      systems: computed(() => AppState.systems)
    }
  }
}
</script>

<style scoped lang="scss">
</style>