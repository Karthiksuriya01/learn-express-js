//Creating an instance for express

const express = require('express')
const app = express()

app.get('/', (req,res) =>
{
    response.send("Hello World")
})

// assigning a port

app.listen(3000)