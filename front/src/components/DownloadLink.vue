<template>
  <div class="row no-wrap q-mb-md q-gutter-x-md">
    <q-card flat class="flex q-pa-xs no-wrap items-center" dark>
      <img src="images/google_play.ico" />
      <div class="col-9 q-ml-xs">
        <div class="q-pr-xs">Télecharger dans</div>
        <div>Google Play</div>
      </div>
    </q-card>

    <q-card flat class="flex q-pa-xs no-wrap items-center" dark>
      <img style="color: white" src="images/social_apple.png" />
      <div class="col-9 q-ml-xs">
        <div class="q-pr-xs">Télécharger dans</div>
        <div>App Store</div>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DownloadLink',
  props: {
  }
})
</script>

<style scoped>

</style>
