/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import emitter from '@adonisjs/core/services/emitter'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  emitter.emit('email:joined', undefined)
  return {
    hello: 'world',
  }
})
