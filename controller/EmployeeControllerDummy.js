const db = require('../model')
const request = require('request')
const Employee = db.employee_dummy

const url = "http://dummy.restapiexample.com/api/v1/employees"

exports.create = (req, res) => {

    var obj;
    var obj1;
    request.get({ url: url }, function (err, res, body) {

        obj = JSON.parse(body)
        obj1 = obj.data
        console.log(obj1)
        
    })


      Employee.bulkCreate(obj1).then(data => {
           res.send(data)
       }).catch(err => {
           console.log(err)
           res.send("error")

       })

}
