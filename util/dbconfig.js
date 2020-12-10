module.exports = {

    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "HEM",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquuire: 30000,
        idel: 10000
    }

};