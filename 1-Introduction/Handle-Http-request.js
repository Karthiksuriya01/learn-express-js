//Creating an instance for express

const express = require('express')
const app = express()

//Handle HTTP-Request
app.get('/', (request,response) =>
{
    response.send("Hello World")
})

// assigning a port

app.listen(3000)

//To run this command  : node Handle-Http-request.js