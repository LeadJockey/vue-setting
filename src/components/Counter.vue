<template>
  <div>
    <strong>Counter</strong>
    <button type="button" @click="decreaseCountBy(2)">--</button>
    <button type="button" @click="decreaseCountBy(1)">-</button>
    <span style="display:inline-block;width:50px;text-align:center;background-color:#efefef">{{getCount}}</span>
    <button type="button" @click="increaseCountBy(1)">+</button>
    <button type="button" @click="increaseCountBy(2)">++</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapMutations, mapGetters } = createNamespacedHelpers('counter')

export default {
  name: 'counter',
  components: {},
  methods: {
    ...mapMutations(['increaseCountBy', 'decreaseCountBy']),
    ...mapActions(['setCount'])
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  data() {
    return {}
  },
  mounted() {
    console.log('counter-mounted')
    this.setCount();
  },
  destroyed() {
    console.log('counter-destroyed')
  }
}
</script>
