<template>
  <div>
    <h2>App content below</h2>
    <hr>
    <router-view></router-view>
    <matrix></matrix>
  </div>
</template>

<script>
import Matrix from '@/components/Matrix'

export default {
  name: 'app',
  components:{
    Matrix
  },
  mounted() {
    console.log('app mounted')
  }
}
</script>