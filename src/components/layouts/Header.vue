<template>
  <div class="app_header">
    <div class="_cont_">
      <h1>LOGO</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app_header {
  height: $head-height;
  background-color: $color-main;
  color: $color-txt-dark;
  box-sizing: border-box;
  border-bottom: 1px solid $color-div-sub;
  h1 {
    font-size: 40px;
    line-height:$head-height;
  }
}
</style>
