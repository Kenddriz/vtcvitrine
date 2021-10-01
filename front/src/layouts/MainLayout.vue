<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-dark">
        <q-item>
          <q-item-section side avatar>
            <q-avatar>
              <img alt="tropik vtc" src="images/logo.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">Tropik VTC</q-item-label>
            <q-item-label class="text-warning" caption>
              Déplacez-vous librement
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-space />
        <q-item-section side>
          <q-item-label class="text-right text-weight-bold">06 92 48 57 13</q-item-label>
          <q-item-label class="text-warning" caption>Assistance par téléphone</q-item-label>
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
      <q-separator color="warning" inset />
      <div class="row justify-center q-my-md q-px-sm">
        <div class="row justify-between" style="width: 100%; max-width: 1100px">
          <div class="col-xs-12 col-sm-6 row items-center justify-between">
            <q-list class="col-12">
              <q-item class="q-pl-none">
                <q-item-section side avatar>
                  <q-avatar>
                    <img alt="tropik vtc" src="images/logo.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <h3 style="margin: unset!important;" class="text-subtitle1 text-weight-bold text-dark">
                    Tropik VTC
                  </h3>
                  <q-item-label class="text-warning" caption>
                    Déplacez-vous librement
                  </q-item-label>
                </q-item-section>
              </q-item>
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
                  <q-item-label class="text-warning">Service 24h/24 & 7jours/7</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <DownloadLink />
          </div>
          <ContactForm />
        </div>
      </div>
      <q-separator color="warning" inset />
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
import ContactForm from 'components/ContactForm.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { DownloadLink, ContactForm }
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
