<template>
  <div>
    <h2>App content below</h2>
    <hr />
    <router-view></router-view>
    <hr />
    <modal-simple-msg></modal-simple-msg>
    <hr />
  </div>
</template>

<script>
import ModalSimpleMsg from '@/components/modal/ModalSimpleMsg'
console.log('A', ModalSimpleMsg)

export default {
  name: 'app',
  components: {
    ModalSimpleMsg
  },
  data() {
    return {}
  },
  mounted() {
    console.log('app mounted')
  }
}
</script>