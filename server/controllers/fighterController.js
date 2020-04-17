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

    let fighter = await db.get_fighter_id([req.params.id]);
    if (fighter[0]) {
      let strong1 = await db.get_fighter_id([fighter[0].strong_1]);
      let strong2 = await db.get_fighter_id([fighter[0].strong_2]);
      let strong3 = await db.get_fighter_id([fighter[0].strong_3]);
      let weak1 = await db.get_fighter_id([fighter[0].weak_1]);
      let weak2 = await db.get_fighter_id([fighter[0].weak_2]);
      let weak3 = await db.get_fighter_id([fighter[0].weak_3]);
      res
        .status(200)
        .send({ fighter, strong1, strong2, strong3, weak1, weak2, weak3 });
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
