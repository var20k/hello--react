const express = require('express')
const server= express()
const port = 5001
console.log("hello world")
server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example serverlistening on port ${port}`)
})

