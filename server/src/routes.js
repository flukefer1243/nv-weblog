const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const CargoController = require('./controllers/CargoController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        isAuthenController,
        UserController.index
    )
    // get last user
    app.get('/lastuser',
        UserController.showlast
    )
    // login user
    app.post('/login',
        UserAuthenController.login
    )



        // create cargo
    app.post('/cargo',
        CargoController.create
    )
    // edit cargo, suspend, active
    app.put('/cargo/:cargoId',
        CargoController.put
    )
    // delete cargo
    app.delete('/cargo/:cargoId',
        CargoController.remove
    )
    // get cargo by id
    app.get('/cargo/:cargoId',
        CargoController.show
    )
    // get all cargo
    app.get('/cargos',
        CargoController.index
    )
    // get last cargo
    app.get('/lastcargo',
        CargoController.showlast
    )
}