<template>
  <div class="app">
    <slot name="header">
      <Header></Header>
    </slot>
    <slot name="main">
      <Main></Main>
    </slot>
    <slot name="footer">
      <Footer></Footer>
    </slot>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Main from '@/components/layouts/Main'
import Footer from '@/components/layouts/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>
