<template>
  <div class="col-3 d-flex flex-column">
    <h3 class="text-center">{{ system.name }}</h3>
    <img :src="system.mainImg" alt="main image" class="" />
    <p>{{ system.description }}</p>
    <p>{{ system.needService }}</p>
    <p>{{ system.lastServiced }}</p>
    <p>{{ system.creator.name }}</p>
    <img :src="system.creator.picture" alt="profile image" class="profile-pic" />
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