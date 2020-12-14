module.exports = app => {

    const employee = require('../controller/EmployeeControllerDummy')
    var router = require('express').Router()

    router.post('/createemployee', employee.create)
    

    app.use('/emp', router)
}