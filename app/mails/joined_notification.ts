import { BaseMail } from '@adonisjs/mail'
import template from '../../resources/views/emails/joined.vue'
import { render } from '@vue-email/render'

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
    const html = await render(
      template,
      {
        title: 'some title',
      },
      {
        pretty: true,
      }
    )
    this.message.subject(this.subject).to(this.email).html(html)
  }
}
