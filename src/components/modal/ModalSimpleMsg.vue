<template>
  <div class="modal_simple_msg">
    <modal-layout>
      <template #head="{title}">
        <h1>{{title}}</h1>
      </template>

      <template #cont="{cont}">
        <p>{{cont}}</p>
        <p>{{modal.head.title}}</p>
      </template>

      <template #foot="{foot}">
        <button type="button">{{foot}}</button>
      </template>
    </modal-layout>
  </div>
</template>

<script>
import ModalLayout from './ModalLayout'

export default {
  name: 'modal_simple_msg',
  components: {
    ModalLayout
  },
  data() {
    return {
      modal: {
        head: {
          title: 'title'
        },
        cont: 'cont',
        foot: 'foot'
      }
    }
  }
}
</script>

<style>
</style>
