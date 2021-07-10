import logger from '../lib/logger';
import { User } from './interfaces';
import { prisma } from '../prisma';

async function createUser(user: User) {
	const { email, name } = user;

	const newUser = await prisma.user.create({
		data: { email, name }
	});

	logger.info(`Creating new user with email ${email} and name ${name}`);

	return newUser;
}

export { createUser };
