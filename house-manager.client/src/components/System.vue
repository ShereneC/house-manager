<template>
  <div class="col-3 d-flex flex-column">
    <h3 class="text-center">{{ system.name }}</h3>
    <img :src="system.mainImg" alt="main image" class="" />
    <p>{{ system.description }}</p>
    <p>{{ system.needService }}</p>
    <p>{{ system.lastServiced }}</p>
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
  export default {

    props: {
      system: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile-pic {
    height: 3rem;
    width: 3rem;
    border-radius: 50%
  }
</style>