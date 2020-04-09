module.exports = {
	getFighterSkin: async (req, res) => {
		const db = req.app.get('db');

		let skins = await db.get_skin(req.params.id);
		if (skins[0]) {
			res.status(200).send(skins);
		} else {
			res.status(500).send({ message: 'No skins in Database' });
		}
	}
};
