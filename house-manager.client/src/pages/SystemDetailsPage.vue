<template>
  <div class="
        flex-grow-1
        container-fluid
        d-flex
        flex-column
        align-items-center
        justify-content-center" v-if="activeSystem._id">
    <div class="row w-100">
      <div class="col-1"></div>
      <div class="col-10 m-3 shadow bg-secondary rounded">
        <h1 class="text-center">{{ activeSystem.name }}</h1>
        <div class="text-center"><img :src="activeSystem.mainImg" alt="main image" class="rounded main-pic" />
        </div>
        <h3>{{ activeSystem.description }}</h3>
        <h4 class="service" v-if="activeSystem.needsService === true">Needs Service!</h4>
        <h6>{{ activeSystem.lastServiced }}</h6>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <p class="m-0">Created by:</p>
            <p class="mr-0">{{ activeSystem.creator.name }}</p>
          </div>
          <div class="div">
            <img :src="activeSystem.creator.picture" alt="profile image" class="profile-pic ml-2" />
          </div>
        </div>
      </div>
      <h3>Notes:</h3>
      <div class="col-10 d-flex" v-for="n in notes" :key="n.id">
        <Note :note="n" />
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
        //const notes = computed(() => AppState.notes[route.param.systemId] || [])
      })
      return {
        activeSystem
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