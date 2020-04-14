module.exports = {
  getAllFighters: async (req, res) => {
    const db = req.app.get("db");

    let fighters = await db.get_all_fighters();
    if (fighters[0]) {
      res.status(200).send(fighters);
    } else {
      res.status(500).send({ message: "No fighters in Database" });
    }
  },

  getFighterById: async (req, res) => {
    const db = req.app.get("db");

    console.log(req.params.id);
    let fighter = await db.get_fighter_id([req.params.id]);
    console.log(fighter);
    if (fighter[0]) {
      res.status(200).send(fighter);
    } else {
      res.status(500).send({ message: "Failed to retrieve fighter" });
    }
  },

  getStandardFighters: async (req, res) => {
    const db = req.app.get("db");

    let fighters = await db.get_standard_fighters();
    if (fighters[0]) {
      let standard = fighters.splice(0, 76);
      res.status(200).send(standard);
    } else {
      res.status(500).send({ message: "Failed to retrieve fighters" });
    }
  },

  getDLCFighters: async (req, res) => {
    const db = req.app.get("db");

    let fighters = await db.get_dlc_fighters();
    if (fighters[0]) {
      let dlc = fighters.splice(76);
      res.status(200).send(dlc);
    } else {
      res.status(500).send({ message: "Failed to retrieve fighters" });
    }
  },
};
