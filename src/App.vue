<template>
  <div>
    <div slot="header">
      <div>header</div>
    </div>
    <div slot="main">
      <router-view></router-view>
    </div>
    <div slot="footer">
      <div>footer</div>
    </div>
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