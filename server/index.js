require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const socketio = require('socket.io')
const http = require('http')

// controller imports
const authCtrl = require('./controllers/authController');
const fighterCtrl = require('./controllers/fighterController');
const skinsCtrl = require('./controllers/skinsController');

// .env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();
const server = http.createServer(app)
const io = socketio(server)
app.use(express.json());


app.use(
	session({
		resave: false,
		saveUninitialized: true,
		rejectUnauthorized: false,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
		secret: SESSION_SECRET
	})
);

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false }
}).then((db) => {
	app.set('db', db);
	console.log('DB connected');
	app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));
});

//SOCKET.IO
io.on('connection', socket => {
  console.log('new connection')

  socket.on('disconnect', () => {
    console.log('user left')
  })
})


// AUTH ENDPOINTS
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.post('/api/logout', authCtrl.logout);

// FIGHTER ENDPOINTS
app.get('/api/fighters', fighterCtrl.getAllFighters);
app.get('/api/fighters/:id', fighterCtrl.getFighterById);
app.get('/api/standard', fighterCtrl.getStandardFighters);
app.get('/api/dlc', fighterCtrl.getDLCFighters);

// FIGHTER SKINS
app.get('/api/skins/:id', skinsCtrl.getFighterSkin);
