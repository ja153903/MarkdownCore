import Express from 'express';
import { body, validationResult } from 'express-validator';

import logger from '../lib/logger';
import { User } from './interfaces';
import { createUser } from './queries';

const router = Express.Router();

router.post('/',
	body('email').isEmail().normalizeEmail(),
	async (req: Express.Request, res: Express.Response) => {
		const validationErrors = validationResult(req);

		if (!validationErrors.isEmpty()) {
			return res.status(400).json({ errors: validationErrors.array() });
		}

		const { email, name } = req.body;
		const user: User = { email, name };

		try {
			const newUser = await createUser(user);
			res.json(newUser);
		} catch {
			logger.error(`Failed to create user with email: ${email}`);
			res.status(500).json({ error: 'Something went wrong' });
		}
	}
);

export default router;
