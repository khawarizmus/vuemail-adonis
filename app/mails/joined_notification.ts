import { BaseMail } from '@adonisjs/mail'

export default class JoinedNotification extends BaseMail {
  subject = 'You have joined'

  constructor(private email: string) {
    super()
  }
  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    this.message.subject(this.subject).to(this.email).htmlView('joined', { title: 'Testing' })
  }
}
