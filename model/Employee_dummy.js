const { sequqlize } = require(".");


module.exports = (sequlize, Sequlize) => {

    const Employee = sequlize.define("employee_dummy", {
        employee_name: {
            type: Sequlize.STRING
        },
        employee_salary: {
            type: Sequlize.STRING
        },
        employee_age:{
            type: Sequlize.STRING
        },
        profile_image:{
            type: Sequlize.STRING
        },
    })

    return Employee;
};