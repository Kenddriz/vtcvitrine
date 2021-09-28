<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-dark">
        <q-avatar class="q-ml-sm">
          <img alt="tropik vtc" src="images/logo.jpg">
        </q-avatar>
        <div class="text-subtitle1 text-bold q-ml-sm">Tropik VTC</div>

        <q-space />
        <q-item-section side>
          <q-item-label class="text-right text-weight-bold">06 92 48 57 13</q-item-label>
          <q-item-label caption>Assistance par téléphone</q-item-label>
        </q-item-section>
        <q-avatar>
          <img alt="tropik vtc" src="images/flag.jpg">
        </q-avatar>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white footer" style="position: relative">
      <q-separator inset />
      <div class="row justify-center q-my-md q-px-sm">
        <div class="row justify-between" style="width: 100%; max-width: 1100px">
          <div class="col-xs-12 col-sm-6 row items-center justify-between">
            <div class="col-12">
              <div class="flex text-dark items-center">
                <q-avatar size="40px">
                  <img alt="tropik vtc" src="images/logo.jpg">
                </q-avatar>
                <span class="text-subtitle1 text-bold q-ml-md">Tropik VTC</span>
              </div>
              <q-list>
                <q-item class="text-dark q-pl-none">
                  <q-item-section side>
                    <q-icon color="primary" name="phone" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Assistance par téléphone</q-item-label>
                    <q-item-label>06 92 48 57 13</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="text-dark q-pl-none">
                  <q-item-section side>
                    <q-icon color="primary" name="access_time" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Disponibilité</q-item-label>
                    <q-item-label>Service 24h/24 7jours/7</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <DownloadLink />
          </div>
          <q-form style="max-width: 400px" class="col col-xs-12 q-gutter-y-md">
            <q-input dense rounded outlined label="Title 1" />
            <q-input dense rounded outlined label="Title 2" />
            <q-input dense type="textarea" rounded outlined placeholder="Message" />
            <div class="flex justify-end">
              <q-btn
                icon-right="send"
                no-caps
                color="warning"
                size="sm"
                rounded
                unelevated
                label="Envoyer"
                text-color="dark"
              />
            </div>
          </q-form>
        </div>
      </div>
      <q-separator inset />
      <div class="flex flex-center q-gutter-x-lg q-mt-md">
        <q-btn flat dense>
          <img height="40" src="images/instagram.png" />
        </q-btn>
        <q-btn flat dense>
          <img height="40" src="images/facebook.png" />
        </q-btn>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import DownloadLink from 'components/DownloadLink.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { DownloadLink }
})
</script>

<style lang="scss">
  .q-page-container {
    padding-bottom: 0!important;
  }
  .footer {
    padding-bottom: 40px;
    padding-top: 40px;
  }
</style>
