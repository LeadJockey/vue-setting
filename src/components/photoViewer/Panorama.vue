<template>
  <div class="_comp_panorama">
    <ul class>
      <li>
        <div></div>
      </li>
    </ul>

    <ul class>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Unsplash from 'unsplash-js'

export default {
  methods: {
    getPhoto() {

      console.table({a:process.env.UNSPLASH_ACCESS_KEY, s:process.env.UNSPLASH_SECRET_KEY})
      
      const unsplash = new Unsplash({
        applicationId: process.env.UNSPLASH_ACCESS_KEY,
        secret: process.env.UNSPLASH_SECRET_KEY
      })
      const authenticationUrl = unsplash.auth.getAuthenticationUrl(['public'])
      console.log('authenticationUrl', authenticationUrl)
      unsplash.auth
        .userAuthentication(authenticationUrl)
        // .then(toJson)
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token)
        })

      console.log('unsplash', unsplash)
    }
  },
  mounted() {
    this.getPhoto()
  }
}
</script>

<style lang="scss" scoped>
</style>
