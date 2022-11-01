// const { response } = require('express')
const express = require("express")
const app = express()
const PORT = 8001

const thoughtBank = {
    thomas: {
        thoughts: [
            "Do I really want this or is it just society tricking me into thinking I want it?",
            "Does this list work, or do I remember wrong?",
            "Is the second civil war coming soon?",
        ],
    },
    error: {
        thoughts: ["unknown"],
    },
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (request, response) => {
    const userName = request.params.name
    let rand = Math.floor(Math.random() * 2)
    if (thoughtBank[userName]) {
        response.json(thoughtBank[userName].thoughts)
    } else {
        response.json(thoughtBank.error.thoughts)
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})
