<template>
  <div>
    <h3>List</h3>
    <router-link tag="div" to="/list/1" style="color:blue;text-decoration:underline">Detail - 1</router-link>
    <router-link tag="div" to="/list/2" style="color:blue;text-decoration:underline">Detail - 2</router-link>
    <router-link tag="div" to="/list/3" style="color:blue;text-decoration:underline">Detail - 3</router-link>
    <router-link tag="div" to="/list/4" style="color:blue;text-decoration:underline">Detail - 4</router-link>
    <router-link tag="div" to="/list/5" style="color:blue;text-decoration:underline">Detail - 5</router-link>
    <hr>
    <div style="padding:20px 0">
      <router-link tag="div" to="/" style="color:blue;text-decoration:underline">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list'
}
</script>
