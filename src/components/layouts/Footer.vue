<template>
  <div class="app_footer">
    <div class="_cont_">
      <p class="txt_auth">Created by @shawn.thecool</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app_footer {
  height: $foot-height;
  background-color: $color-div-sub;
  color: $color-txt-sub;
  box-sizing:border-box;
  border-top:1px solid $color-div;
  .txt_auth{
    text-align: center;
    line-height:$foot-height;
  }
}
</style>
