<template>
  <div class="
        flex-grow-1
        container-fluid
        d-flex
        flex-column
        align-items-center
        justify-content-center" v-if="activeAppliance._id">
    <div class="row w-100">
      <div class="col-1"></div>
      <div class="col-md-10 mx-0 my-2 shadow bg-secondary rounded">
        <h1 class="text-center">{{ activeAppliance.name }}</h1>
        <div class="text-center"><img :src="activeAppliance.mainImg" alt="main image" class="rounded main-pic" />
        </div>
        <h3>{{ activeAppliance.description }}</h3>
        <h4 class="service" v-if="activeAppliance.needsService === true">Needs Service!</h4>
        <h6>{{ activeAppliance.lastServiced }}</h6>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <p class="m-0">Created by:</p>
            <p class="mr-0">{{ activeAppliance.creator.name }}</p>
          </div>
          <div class="div">
            <img :src="activeAppliance.creator.picture" alt="profile image" class="profile-pic ml-2" />
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row w-100">
      <div class="col d-flex flex-column">
        <h3>Notes:</h3>
        <div class="row border bg-grey rounded p-1" v-for="n in notes" :key="n.id">
          <Note :note="n" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { computed, onMounted } from '@vue/runtime-core'
  import { AppState } from '../AppState'
  import { appliancesService } from '../services/AppliancesService'
  import Pop from '../utils/Notifier'
  import { useRoute } from 'vue-router'

  export default {
    setup() {
      const route = useRoute()
      const activeAppliance = computed(() => AppState.activeAppliance)
      const notes = computed(() => AppState.notes[route.params.applianceId] || [])
      onMounted(async () => {
        try {
          await appliancesService.getApplianceById(route.params.applianceId)
          await appliancesService.getNotesByApplianceId(route.params.applianceId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      })
      return {
        activeAppliance,
        notes
      }
    }
  }
</script>


<style lang="scss" scoped>
  .service {
    color: red;
  }

  .main-pic {
    width: 60%;
    height: 16rem;
    object-fit: cover;
  }

  .profile-pic {
    height: 3rem;
    width: 3rem;
    border-radius: 50%
  }
</style>