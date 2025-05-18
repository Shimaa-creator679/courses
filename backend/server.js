const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')




const app = express()


app.use(cors({
  origin: 'https://ubiquitous-mooncake-405e3c.netlify.app', 
}))

// Optional: Set headers manually just in case
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*") // for all origins; restrict in prod
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const router = jsonServer.router('db.json')
console.log("Database:", router.db.getState())
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use('/api', router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})




