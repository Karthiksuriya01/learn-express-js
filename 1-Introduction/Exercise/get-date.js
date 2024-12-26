const express = require("express")
const app = express()

app.get('/date', (request, response) =>
{
    const date = new Date()
    response.send(`Today date is ${date}`)


})

app.listen(3000)


//browser : localhost:3000/date