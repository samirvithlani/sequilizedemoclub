const request = require('request')


exports.getEmployee = (req, res) => {

    request.get({ url: "http://dummy.restapiexample.com/api/v1/employees" }, function (err, succ, body) {

        console.log(body)
        res.send(JSON.parse(body))
    })

}
exports.getCoronaData = (req, res) => {

    headersParam = {
        "x-rapidapi-key": "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
    queryParms = {
        "date": "2020-04-01",
        "name": "India"
    }

    request.get({ url: "https://covid-19-data.p.rapidapi.com/report/country/name", headers: headersParam, qs: queryParms }, function (err, succ, body) {

        console.log(body)

    })
}

exports.postEmployee = (req, res) => {

    queryParms = {
        name: "samir",
        salary: "123456",
        age: "45"
    }
    request.post({ url: "http://dummy.restapiexample.com/api/v1/create", qs: queryParms }, function (err, suc, body) {

        if (!err) {
            res.send(body)
        }
        else {
            res.send(err)
        }

    })
}

exports.createUser = (req, res) => {

    authHeaders = {
        "Authorization": "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
    }
    params = {
        name: "samir",
        email: "samir12@gmail.com",
        status: "Active",
        gender: "Male"
    }
    request.post({ url: "https://gorest.co.in/public-api/users", headers: authHeaders, qs: params }, function (err, suc, body) {

        if (!err) {

            res.send(body)
        }

    })
}

exports.createUser1 = (req, res) => {

    authHeaders = {
        "Authorization": "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
    }

    console.log(req.body)
    params = {
        name: req.body.name,
        email: req.body.email,
        status: req.body.status,
        gender: req.body.gender
    }
    request.post({ url: "https://gorest.co.in/public-api/users", headers: authHeaders, qs: params }, function (err, suc, body) {

        if (!err) {

            res.send(body)
        }

    })
}

exports.delteUser = (req, res) => {

    authHeaders = {
        "Authorization": "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
    }
    request.delete({ url: "https://gorest.co.in/public-api/categories/2", headers: authHeaders }, function (err, succ, body) {

        if (!err) {
            res.send(body)
        }
        else {
            res.send(err)
        }
    })
}