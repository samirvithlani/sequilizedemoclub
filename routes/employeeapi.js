module.exports = app => {

    const employee = require('../controller/employeeControllerApis')
    var router = require('express').Router()

    router.get('/', employee.getEmployee)
    router.get('/coronadata', employee.getCoronaData)
    router.get('/postemp', employee.postEmployee)
    router.get('/postuser', employee.createUser)
    router.post('/post', employee.createUser1)
    router.get('/deleteuser', employee.delteUser)
    app.use('/empapi', router)
}