<template>
  <div class="
      home
      flex-grow-1
      container-fluid
      d-flex
      flex-column
      align-items-center
      justify-content-center
    ">
    <div class="row w-100 text-center mt-4">
      <div class="col-12">
        <h1>Systems</h1>
      </div>
    </div>
    <div class="row w-100">
      <System v-for="s in systems" :key="s.id" :system="s" />
    </div>
    <div class="row w-100 text-center mt-4">
      <div class="col-12">
        <h1>Appliances</h1>
      </div>
    </div>
    <div class="row w-100">
      <Appliance v-for="a in appliances" :key="a.id" :appliance="a" />
    </div>
  </div>
</template>

<script>
  import { computed, onMounted } from '@vue/runtime-core'
  import { AppState } from '../AppState'
  import Pop from '../utils/Notifier'
  import { systemsService } from '../services/SystemsService'
  import { appliancesService } from '../services/AppliancesService'

  export default {
    name: 'Home',
    setup() {
      onMounted(async () => {
        try {
          await systemsService.getAllSystems()
          await appliancesService.getAllAppliances()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      })
      return {
        systems: computed(() => AppState.systems),
        appliances: computed(() => AppState.appliances)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>