//  this is configuration
const express = require('express')
const app = express()
const port = 3000

// this is api
app.get('/', (req, res) => res.send('Hello World!'))

// bye world
app.get('/bye', (req, res) => res.send('Bye World!'))


// running the app
app.listen(port, () => console.log(`Example app listening on port ${port}!`))