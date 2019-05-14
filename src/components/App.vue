<template>
  <div>
    <h2>App content below</h2>
    <hr>
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