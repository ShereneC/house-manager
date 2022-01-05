<template>
  <div class="col-3 d-flex flex-column rounded m-2 shadow selectable bg-secondary" @click="setActiveSystem">
    <h2 class="text-center">{{ system.name }}</h2>
    <img :src="system.mainImg" alt="main image" class="rounded main-pic" />
    <h4>{{ system.description }}</h4>
    <h4 class="service" v-if="system.needsService === true">Needs Service!</h4>
    <h6>{{ system.lastServiced }}</h6>
    <div class="d-flex justify-content-center">
      <div class="m-2">
        <p class="mr-0">{{ system.creator.name }}</p>
      </div>
      <div class="div">
        <img :src="system.creator.picture" alt="profile image" class="profile-pic ml-2" />
      </div>
    </div>
  </div>
</template>

<script>
  import Pop from '../utils/Notifier'
  import { systemsService } from '../services/SystemsService'
  import { router } from '../router'
  export default {

    props: {
      system: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      return {
        async setActiveSystem() {
          try {
            await systemsService.setActiveSystem(props.system.id)
            router.push({ name: 'SystemDetails', params: { systemId: props.system.id } })
          } catch (error) {
            Pop.toast(error, 'error')
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-pic {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  .profile-pic {
    height: 3rem;
    width: 3rem;
    border-radius: 50%
  }

  .service {
    color: red;
  }
</style>