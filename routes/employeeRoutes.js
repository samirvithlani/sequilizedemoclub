module.exports = app => {

    const employee = require('../controller/employeeController')
    var router = require('express').Router()

    router.post('/', employee.create)
    router.get('/',employee.findAll)
    router.get('/:id',employee.getByPk)
    router.delete('/:name',employee.delete)
    router.post('/update/:id',employee.update)

    app.use('/employee', router)
}