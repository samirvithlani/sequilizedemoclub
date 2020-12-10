const { sequqlize } = require(".");

module.exports = (sequqlize, Sequqlize) => {

    const Employee = sequqlize.define("employee", {
        ename: {
            type: Sequqlize.STRING
        },
        eemail: {
            type: Sequqlize.STRING
        }
    })

    return Employee;
};