<template>
  <q-card
    bordered
    v-for="(p, index) in $tm('description')"
    :key="index"
    flat
    class="q-mb-md"
  >
    <q-card-section class="q-px-sm">
      <q-item dense>
        <q-item-section avatar>
          <!--<q-avatar icon="lightbulb" color="primary" text-color="white" />-->
          <q-avatar color="primary" text-color="white">{{index + 1}}</q-avatar>
        </q-item-section>
        <q-item-section class="text-justify">
          <p v-html="p"></p>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Description'
}
</script>

