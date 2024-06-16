/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CategoriesController from '#controllers/categories_controller'
import TagsController from '#controllers/tags_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// users
router.get('/api/users', [UsersController, 'index'])

// categories
router.get('/api/categories', [CategoriesController, 'index'])
router.post('/api/categories', [CategoriesController, 'store'])
router.put('/api/categories', [CategoriesController, 'update'])
router.delete('/api/categories', [CategoriesController, 'delete'])

// tags
router.get('/api/tags', [TagsController, 'index'])
router.post('/api/tags', [TagsController, 'store'])
router.put('/api/tags', [TagsController, 'update'])
router.delete('/api/tags', [TagsController, 'delete'])
