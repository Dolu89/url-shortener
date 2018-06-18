'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', 'HomeController.index')

Route.group(() => {
    Route.post('/', 'UrlController.create')
}).prefix('/url')

// Route.get('/dashboard', 'DashboardController.index').middleware('auth')

Route.on('/signup').render('auth.signup')
Route.on('/signin').render('auth.signin')
Route.post('/signin', 'UserController.login')
Route.post('/signup', 'UserController.store')
Route.get('/logout', async ({ auth, response }) => {
    await auth.logout()
    return response.redirect('/')
})

Route.get('/:code', 'UrlController.redirect')
