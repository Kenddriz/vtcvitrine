<template>
  <q-page class="row justify-center">
    <q-img src="images/background.jpg" height="250px" />
    <q-card flat square class="bg-warning col-12">
      <h1 class="text-h5 text-center q-pt-md text-white">
        TELECHARGER VOTRE APPLICATION DE CHAUFFEUR PRIVEE DISPONIBLE SUR TOUTE LA REUNION
      </h1>
      <q-card-actions align="center" class="q-pb-lg">
        <DownloadLink />
      </q-card-actions>
    </q-card>
    <div class="col-12 flex-center flex q-pt-lg">
      <div style="max-width: 900px" class="q-px-sm">
        <Description />
      </div>
      <q-separator style="width: calc(100% - 50px)" inset />
    </div>
    <div style="max-width: 900px" class="col-12 margin-top q-px-sm">
      <div class="row justify-around items-center">
        <div class="col-xs-12 col-md-6">
          <div class="text-h6 text-warning">COMMANDER EN QUELQUES CLICS</div>
          <h2 style="font-size: 14px; margin-bottom: -10px" class="q-mt-lg">
            Télécharger l'application <b>Tropik VTC</b>
          </h2>
          <!--<DownloadLink /> -->
        </div>
        <img class="col-xs-12 col-md-6" height="250" src="images/car1.jpg" />
      </div>

      <div class="row justify-between margin-top">
        <q-img class="col-xs-12 col-md-6" height="250px" src="images/car2.jpg" />
        <div class="col-xs-12 col-md-5">
          <div class="text-h6 text-warning">AVANTAGES</div>
          <q-list class="q-mb-lg">
            <q-item>
              <q-item-section avatar side>
                <q-icon color="primary" name="touch_app" />
              </q-item-section>
              <q-item-section>Commander une course</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side>
                <q-icon color="primary" name="event_available" />
              </q-item-section>
              <q-item-section>Commander à l'avance</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side>
                <q-icon name="grading" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  Choisissez votre voiture, <b>Luxe</b> ou <b>Van</b> ou <b>Normal</b>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <!--<DownloadLink />-->
        </div>
      </div>
      <!--simple efficace-->
      <div class="row justify-between margin-top">
        <div class="col-md-6 col-xs-12">
          <div class="text-h6 text-warning">SIMPLE ET EFFICACE</div>
          <q-list class="q-mb-lg">
            <q-item>
              <q-item-section avatar side>
                <q-icon color="primary" name="person_add" />
              </q-item-section>
              <q-item-section>Créez votre compte</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side>
                <q-icon color="primary" name="contact_page" />
              </q-item-section>
              <q-item-section>Commander votre chaffeur</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side>
                <q-icon name="travel_explore" color="primary" />
              </q-item-section>
              <q-item-section>Suivez en direct</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side>
                <q-icon name="description" color="primary" />
              </q-item-section>
              <q-item-section>Notez votre course</q-item-section>
            </q-item>
          </q-list>
          <!--<DownloadLink />-->
        </div>
        <q-img class="col-xs-12 col-md-6" height="250px" src="images/car44.jpg" />
      </div>

      <!--Gammes -->
      <div class=" margin-top text-h6 text-warning text-center">
        NOS GAMMES DE VEHICULES
      </div>
      <div class="text-center text-body1 text-weight-bold">
        Nous mettons à votre disposition des véhicules premium sécurisés
      </div>
      <q-carousel
        animated
        v-model="slide"
        swipeable
        thumbnails
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        :height="`${$q.screen.gt.sm ? 400 : 300}px`"
        class="bg-warning q-mt-md"
        control-color="primary"
      >
        <q-carousel-slide
          v-for="x in 5"
          :name="x"
          :img-src="`images/car${x + 2}.jpg`"
          :key="x"
          :class="$q.screen.gt.xs ? '' : 'carousel-image'"
        />
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DownloadLink from '../components/DownloadLink.vue';
import Description from '../components/Description.vue';
export default defineComponent({
  name: 'PageIndex',
  components: { DownloadLink, Description },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
});
</script>
<style lang="scss">
  .margin-top {
    margin-top: 50px;
  }
  .carousel-image{
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
