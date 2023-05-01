const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const routes = require('./routes')
const usePassport = require('./config/passport')
require('./config/mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})