<template>
  <div>
    <h3>Home</h3>
    <counter></counter>
    <hr>
    <div style="padding:20px 0">
      <router-link tag="div" to="/list" style="color:blue;text-decoration:underline">List</router-link>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
export default {
  name: 'home',
  components: {
    Counter
  }
}
</script>

