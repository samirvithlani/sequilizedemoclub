const db = require('../model')
const Employee = db.employee;
exports.create = (req, res) => {


    const employee = {

        ename: req.body.ename,
        eemail: req.body.eemail
    }

    //save to database..
    /* 
        employee.create(employee,(req,res)=>{
    
            if(err)
    
    
        }) */

    Employee.create(employee).then(data => {
        res.send(data)
    }).catch(err => {
        res.send("error")
    })
}
exports.findAll = (req, res) => {

    Employee.findAll({
        where: { ename: "jaya" }
    }).then(data => {

        res.send(data)
    }).catch(err => {

        res.send("error")
    })
}
exports.getByPk = (req, res) => {

    var id = req.params.id;
    Employee.findByPk(id).then(data => {

        res.send(data)
    }).catch(err => {

        res.send("error")
    })

}
exports.delete = (req, res) => {


    var name = req.params.name;
    Employee.destroy({
        where: { ename: name }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Employeee Deleted.."
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "could not delete Employee"
        })
    })

}
exports.update = (req, res) => {

    const id = req.params.id;
    console.log(id)
    console.log(req.body)
    Employee.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Employee Updated.."
            })

        }
        else {
            res.send({
                error: "employee not updated.."
            })
        }
    }).catch(err => {

        res.status(500).send({
            error: "Error while updating Employee.."
        })
    })
}