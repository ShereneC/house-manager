<template>
  <div class="col-3 d-flex flex-column rounded m-2 shadow selectable">
    <h2 class="text-center">{{ system.name }}</h2>
    <img :src="system.mainImg" alt="main image" class="" />
    <h4>{{ system.description }}</h4>
    <h2>{{ system.needService }}</h2>
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