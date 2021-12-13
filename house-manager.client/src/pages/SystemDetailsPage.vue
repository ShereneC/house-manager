<template>
  <div class="
        flex-grow-1
        container-fluid
        d-flex
        flex-column
        align-items-center
        justify-content-center
      " v-if="activeSystem._id">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        {{activeSystem}}
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>


<script>
  import { computed, onMounted } from '@vue/runtime-core'
  import { AppState } from '../AppState'
  import { systemsService } from '../services/SystemsService'
  import Pop from '../utils/Notifier'
  import { useRoute } from 'vue-router'

  export default {

    setup() {
      const route = useRoute()
      const activeSystem = computed(() => AppState.activeSystem)
      onMounted(async () => {
        try {
          await systemsService.getSystemById(route.params.systemId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      })
      return {}
    },
    components: {}
  }
</script>


<style lang="scss" scoped>

</style>