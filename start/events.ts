import mail from '@adonisjs/mail/services/main'
import emitter from '@adonisjs/core/services/emitter'
import JoinedNotification from '#mails/joined_notification'

emitter.on('email:joined', async () => {
  console.log('email:joined event received')
  await mail.sendLater(new JoinedNotification('test@email.com'))
})
