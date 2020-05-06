const participants = [];

module.exports = {
  createTournament: async (req, res) => {
    const { tournament_name, tournament_password, tournament_size } = req.body;
    const db = req.app.get("db");

    //checks if tournament name already in use
    let duplicateName = await db.check_tournament_name(tournament_name);
    if (duplicateName[0]) return res.sendStatus(409);

    //creates unique tournament key
    let tournament_key = Math.random().toString(36).substr(2, 7);
    let foundKey = await db.check_tournament_key([tournament_key]);
    if (foundKey) {
      tournament_key = Math.random().toString(36).substr(2, 7);
    }

    await db.create_tournament([
      tournament_name,
      tournament_password,
      tournament_key,
      tournament_size,
    ]);

    return res.status(200).send(tournament_key);
  },

  deleteTournament: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    await db.delete_tournament(id);

    try {
      let allTournaments = await db.delete_tournament(id);
      return res.status(200).send(allTournaments);
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  getTournaments: async (req, res) => {
    const db = req.app.get("db");

    let allTournaments = await db.get_tournaments();

    if (allTournaments[0]) {
      return res.status(200).send(allTournaments);
    } else {
      return res.sendStatus(500);
    }
  },

  addParticipant: ({ participant_id, bracket_id, username }) => {
    const participant = { participant_id, bracket_id, username };
    participants.push(participant);
    return { participant };
  },

  getParticipantsInBracket: (bracket_id) =>
    participants.filter((participant) => participant.bracket_id === bracket_id),
};
