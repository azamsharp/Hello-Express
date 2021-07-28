const express = require('express')
const app = express() 

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/hello', (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Server is running...')
})
