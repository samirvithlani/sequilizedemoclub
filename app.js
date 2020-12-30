const express = require('express')
const app = express();
//content type of request is json
app.use(express.json())
//const db = require('./model')
//db.sequelize.sync();
//require('./routes/employeeRoutes')(app)
//require('./routes/employeedummyRoutes')(app)
require('./routes/employeeapi')(app)

app.listen(3000, () => {
    console.log("Server Started..")
})
