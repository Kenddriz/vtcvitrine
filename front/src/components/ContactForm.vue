<template>
  <q-form @submit="send" style="max-width: 400px" class="col col-xs-12 q-gutter-y-md">
    <q-input
      dense
      rounded
      outlined
      placeholder="Nom *"
      :model-value="inputForm.name"
      v-model="inputForm.name"
      lazy-rules
      :rules="[val => val && val.length > 0 || 'Entrer votre nom']"
    />
    <q-input
      dense
      rounded
      outlined
      placeholder="Email *"
      :model-value="inputForm.From"
      v-model="inputForm.From"
      lazy-rules
      :rules="[val => val && val.length > 0 || 'Email invalide']"
    />
    <q-input
      :model-value="inputForm.Body"
      v-model="inputForm.Body"
      dense
      type="textarea"
      rounded
      outlined
      placeholder="Message"
      lazy-rules
      :rules="[val => val && val.length > 0 || 'Saisir votre message']"
    />
    <div class="flex justify-end">
      <q-btn
        type="submit"
        icon-right="send"
        no-caps
        color="warning"
        size="md"
        rounded
        unelevated
        label="Envoyer"
        text-color="white"
        :loading="loading"
        :disable="loading"
      >
        <template v-slot:loading>
          <q-spinner-bars color="white" />
        </template>
      </q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useSendMail} from 'src/logique/send-mail';
/**https://www.google.com/settings/security/lesssecureapps**/

export default defineComponent({
  name: 'ContactForm',
  setup() {
    return {
      ...useSendMail()
    }
  }
})
</script>

<style lang="scss">
  .q-field .q-field__control:before {
    border: 1px solid #F5C36E;
  }
</style>
