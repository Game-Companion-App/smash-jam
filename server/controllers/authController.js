const bcrypt = require('bcryptjs');

module.exports = {
	register: async (req, res) => {
		const { user_name, user_email, user_password } = req.body;
    const db = req.app.get('db');
    
  // checks for existing username
		let user = await db.check_username([user_name]);
		if (user[0]) {
			return res.status(400).send(console.log('Username already exists'));
    }
  // checks for existing email
		let email = await db.check_email([user_email]);
		if (email[0]) {
			return res.status(400).send(console.log('Email already exists'));
		}

		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(user_password, salt);

		let newUser = await db.register_user([ user_name, user_email, hash ]);
		req.session.user = newUser[0];

		console.log(`--- User registered ---`);
		return res.status(200).send(req.session.user);
	},

	login: async (req, res) => {
		const { user_email, user_password } = req.body;
		const db = req.app.get('db');

    let user = await db.check_email([ user_email ]);
    user = user[0]
		if (!user) {
			return res.status(400).send(console.log('Email not found/registered'));
		}

		const authenticated = bcrypt.compareSync(user_password, user.user_password);
		if (authenticated) {
			delete user.user_password;
			req.session.user = user;

			console.log(`--- User logged in ---`);
			return res.status(200).send(req.session.user);
		} else {
			return res.status(401).send(console.log('Incorrect password'));
		}
	},

	logout: (req, res) => {
		console.log(`--- user logged out ---`);
		req.session.destroy();
		return res.sendStatus(200);
  },
  
  getCurrentUser: async (req, res) => {
    return res.status(200).send(req.session.user)
  }
};
