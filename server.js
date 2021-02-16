if (process.env.NODE_ENV === 'production') {
  require('dotenv').config
}

const express = require('express')
const app = express()
const bcrypt = req('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
passport, 
email => users.find(user => user.email === email),
id => users.find(user => user.id === id)
)

//need to connect here to our database
const users = []

app.set ('view-engine', 'hbs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

app.get('/', checkNotAuthenticated, (req, res) => {
  res.render('index.hbs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.hbs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.hbs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await brcypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString()
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  req.redirect('/login')
})

//so that non logged in users can't see content
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
   return res.redirect('/')
}
next()

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)};
