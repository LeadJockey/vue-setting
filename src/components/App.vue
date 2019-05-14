<template>
  <div>
    <h2>vue app content</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    console.log('app mounted')
  }
}
</script>