import {reactive, ref} from 'vue';
import {Notify} from 'quasar';

const Email: any = require('../assets/js/smtp');
/**https://www.google.com/settings/security/lesssecureapps**/
const client = {
  SecureToken : '8543d244-bb26-420a-8685-83c5202c60e9',
  To: 'tropicvtc@gmail.com'/*website=>tropicvtc@gmail.com **/,
}

export const useSendMail = () => {
  const inputForm = reactive({
    From: '',
    name: '',
    Body: '',
    Subject: 'Tropik vtc'
  });
  function validMail() {
    const regExp = /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i;
    return regExp.test(inputForm.From);
  }
  const loading = ref<boolean>(false);
  function send() {
    loading.value = true;
    Email.send({
      ...client,
      ...inputForm,
      From: inputForm.name + '<' + inputForm.From + '>'
    }).then(
      (message: string) => {
        loading.value = false;
        if(message.toLowerCase() === 'ok') {
          Notify.create({
            message: 'Votre email a bien été envoyé !',
            color: 'primary',
            position: 'bottom-right'
          })
        } else {
          Notify.create({
            message: 'Echec d\'envoi',
            caption: 'Erreur de service SMTP.',
            color: 'warning',
            position: 'bottom-right'
          })
        }
      }
    ).catch(() => {
      Notify.create({
        message: 'Serveur SMTP ne répond pas !',
        color: 'warning',
        position: 'bottom-right'
      })
      loading.value = false;
    });
  }
  return { inputForm, send, loading, validMail }
}
