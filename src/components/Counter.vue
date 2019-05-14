<template>
  <div>
    <strong>Counter</strong>
    <button type="button" @click="decreaseCount">-</button>
    <span style="display:inline-block;width:50px;text-align:center;background-color:#efefef">{{getCount}}</span>
    <button type="button" @click="increaseCount">+</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapGetters } = createNamespacedHelpers('counter')

export default {
  name: 'counter',
  components: {},
  methods: {
    ...mapActions(['increaseCount', 'decreaseCount'])
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  data() {
    return {}
  },
  mounted() {
    console.log('counter-mounted')
  },
  destroyed() {
    console.log('counter-destroyed')
  }
}
</script>
