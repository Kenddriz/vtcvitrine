import {reactive} from 'vue';
import {Notify} from 'quasar';

const Email: any = require('../assets/js/smtp');
/**https://www.google.com/settings/security/lesssecureapps**/
const client = {
  Username: 'tropicvtc@gmail.com',
  Password: 'tropicvtc2021',
  Port: 587,
  Host: 'smtp.gmail.com',
  To: 'rcarandrcharlin@gmail.com'/*website**/,
  Subject: 'Prise de contact'
}

export const useSendMail = () => {
  const inputForm = reactive({
    From: '',
    name: '',
    Body: '',
  });
  function send() {
    Email.send({
      ...client,
      ...inputForm,
    }).then(
      (message: string) => {
        if(message.toLowerCase() === 'ok') {
          Notify.create({
            message: 'Votre email a bien été envoyé',
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
    )
  }
  return { inputForm, send }
}
