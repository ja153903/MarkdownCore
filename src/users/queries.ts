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

async function updateUser(userId: number, data: any) {
	const updatedUser = await prisma.user.update({
		where: {
			id: userId
		},
		data
	});

	logger.info(`Updating user fields ${Object.keys(data)} for userId ${userId}`);

	return updatedUser;
}

async function deleteUser(userId: number) {
	const deletedUser = await prisma.user.delete({
		where: {
			id: userId
		}
	});

	logger.info(`Deleting user with userId: ${userId}`);

	return deletedUser;
}

export { createUser, updateUser, deleteUser };
