import logger from '../lib/logger';
import { User } from './interfaces';
import { prisma } from '../prisma';

async function createUser(user: User) {
	const { email, name } = user;

	// TODO: MKDN-5/sanitize-and-validate-email
	// Should have functionality to sanitize and validate the email

	const newUser = await prisma.user.create({
		data: { email, name }
	});

	logger.info(`Creating new user with email ${email} and name ${name}`);

	return newUser;
}

export { createUser };
