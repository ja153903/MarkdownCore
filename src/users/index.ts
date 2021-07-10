import Express from 'express';

import logger from '../lib/logger';
import { User } from './interfaces';
import { createUser } from './queries';

const router = Express.Router();

router.post('/', async (req, res) => {
	const { email, name } = req.body;
	const user: User = { email, name };

	try {
		const newUser = await createUser(user);
		res.json(newUser);
	} catch {
		logger.error(`Failed to create user with email: ${email}`);
		res.status(500).json({ error: 'Something went wrong' });
	}

});

export default router;
