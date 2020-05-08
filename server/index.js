require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const socketio = require("socket.io");
const http = require("http");

// controller imports
const authCtrl = require("./controllers/authController");
const fighterCtrl = require("./controllers/fighterController");
const skinsCtrl = require("./controllers/skinsController");
const tournamentCtrl = require("./controllers/tournamentController");

// .env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("DB connected");
  app.listen(SERVER_PORT, () =>
    console.log(`Server running on port ${SERVER_PORT}`)
  );
});

//SOCKET.IO
io.on("connection", (socket) => {
  socket.on('createTournament', )

  socket.on("join", ({user_name, tournament_key}) => {
    socket.join(tournament_key);

    socket.emit('message', { user: 'Admin', text: `-${user_name} has joined the tournament-`});
    
    io.to(tournament_key).emit("tournamentData", {participants: user_name});
  });

  socket.on("disconnect", () => {
    console.log("participant left");
  });

});

// AUTH ENDPOINTS
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post("/auth/logout", authCtrl.logout);
app.get('/auth/user', authCtrl.getCurrentUser)

// FIGHTER ENDPOINTS
app.get("/api/fighters", fighterCtrl.getAllFighters);
app.get("/api/fighters/:id", fighterCtrl.getFighterById);
app.get("/api/standard", fighterCtrl.getStandardFighters);
app.get("/api/dlc", fighterCtrl.getDLCFighters);

// FIGHTER SKINS
app.get("/api/skins/:id", skinsCtrl.getFighterSkin);

// TOURNAMENT ENDPOINTS
app.get("/api/tournaments", tournamentCtrl.getTournaments);
app.post("/api/tournaments", tournamentCtrl.createTournament);
app.delete("/api/tournaments/:id", tournamentCtrl.deleteTournament);




app.put("/api/tournaments", tournamentCtrl.updateBracket);
