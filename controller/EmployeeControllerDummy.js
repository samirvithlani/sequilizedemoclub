const db = require('../model')
const request = require('request')
const Employee = db.employee_dummy

const url = "http://dummy.restapiexample.com/api/v1/employees"

exports.create = (req, res) => {

    var obj;
    var obj1;
    request.get({ url: url }, function (err, res, body) {

        obj = JSON.parse(body)
        obj1 = obj.data[0]
        
    })


    /* 
        const employee = {
    
            ename: req.body.ename,
            eemail: req.body.eemail
        }
    
        //save to database..
        
            employee.create(employee,(req,res)=>{
        
                if(err)
        
        
            }) */

      Employee.create(obj1).then(data => {
           res.send(data)
       }).catch(err => {
           res.send("error")
       })

}
