<template>
  <div class="modal_layout">
    <slot name="head" :title="title"></slot>
    <slot name="cont" :cont="cont"></slot>
    <slot name="foot" :foot="foot"></slot>
  </div>
</template>

<script>
//데이터 보다는 확장성있는 메서드를 등록해두고 외부에서 작동시킨다

export default {
  name: 'modal_layout',
  methods: {},
  computed: {},
  data() {
    return {
      title: 'origin title',
      cont: 'origin cont',
      foot: 'origin foot'
    }
  },
  mounted() {},
  destroyed() {}
}
</script>

<style scoped>
.comp_comm_modal {
  padding: 10px;
}
</style>
