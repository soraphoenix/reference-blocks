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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.any('*', 'PageController.home')
Route.get('/', 'PageController.home')
Route.post('/saveuser', 'PageController.saveUser')
Route.get('/edge', 'PageController.edge')
Route.get('/account', 'PageController.admin')
Route.get('/contact', 'PageController.contact').as('myContactPage')

// Route.get('/:category/:min/:max', 'ItemController.index')

Route.group(() => {
    Route.get('/dragon-ball-z', () => `<h1>Dragon Ball Z</h1>`)
    Route.get('/call-of-duty', () => `<h1>Call of Duty</h1>`)
}).prefix('games/ps4')

Route.group(() => {
    Route.get('/dragon-ball-z', () => `<h1>Dragon Ball Z</h1>`)
    Route.get('/call-of-duty', () => `<h1>Call of Duty</h1>`)
}).prefix('games/xbox1')
