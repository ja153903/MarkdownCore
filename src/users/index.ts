import Express from 'express';

import { User } from './interfaces';
import { createUser } from './queries';

const router = Express.Router();

router.post('/', async (req, res) => {
	const { email, name } = req.body;
	const user: User = { email, name };

	const newUser = await createUser(user);

	res.json(newUser);
});

export default router;
