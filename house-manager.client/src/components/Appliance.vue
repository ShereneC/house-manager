<template>
  <div class="col-3 d-flex flex-column rounded m-2 shadow selectable bg-secondary" @click="setActiveAppliance">
    <h2 class="text-center">{{ appliance.name }}</h2>
    <img :src="appliance.mainImg" alt="main image" class="rounded main-pic" />
    <h4>{{ appliance.model }}</h4>
    <h4 class="service">Needs Service!</h4>
    <!-- Need a v-if here, but v-if, v-bind, v-for, etc. are not coming up as options when I type v- -->

    <h6>{{ appliance.lastServiced }}</h6>
    <div class="d-flex justify-content-center">
      <div class="m-2">
        <p class="mr-0">{{ appliance.creator.name }}</p>
      </div>
      <div class="div">
        <img :src="appliance.creator.picture" alt="profile image" class="profile-pic ml-2" />
      </div>
    </div>
  </div>
</template>

<script>
  import Pop from '../utils/Notifier'
  import { appliancesService } from '../services/AppliancesService'
  import { router } from '../router'
  export default {

    props: {
      appliance: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      return {
        async setActiveAppliance() {
          try {
            await appliancesService.setActiveAppliance(props.appliance.id)
            router.push({ name: 'AppllianceDetails', params: { applianceId: props.appliance.id } })
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