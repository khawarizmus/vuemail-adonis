import { Message } from '@adonisjs/mail'
import { render } from '@vue-email/render'
import type { ApplicationService } from '@adonisjs/core/types'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    Message.templateEngine = {
      async render(templatePath, helpers, data) {
        const html = await render(templatePath, data, helpers)
        console.log(html)
        return html
      },
    }
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
