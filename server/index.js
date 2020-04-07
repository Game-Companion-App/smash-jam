require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
// controller imports
const authCtrl = require('./controllers/authController')
const fighterCtrl = require('./controllers/fighterController')
const seriesCtrl = require('./controllers/seriesController')
// .env process
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
    secret: SESSION_SECRET
  })
)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('DB connected')
  app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})

// AUTH ENDPOINTS
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.post('/api/logout', authCtrl.logout)

// // FIGHTER ENDPOINTS
// app.get('/api/fighters', fighterCtrl.all)
// app.get('/api/fighters/:fighter_id', fighterCtrl.byId)
//   // FIGHTER SKINS
//   app.get('/api/fighters/:fighter_id/skins', fighterCtrl.skins)
//   // FIGHTER STATS
//   app.get('/api/fighters/:fighter_id/stats', fighterCtrl.stats)
//   // COUNTER PICKS
//   app.get('/api/fighters/:fighter_id/counters', fighterCtrl.counters)

// // SERIES LOGO & ICON ENDPOINTS
// app.get('/api/logos', seriesCtrl.logos)
// app.get('/api/icons', seriesCtrl.icons)