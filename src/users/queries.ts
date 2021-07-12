import logger from '../lib/logger';
import { User } from './interfaces';
import { prisma } from '../prisma';

async function createUser(user: User) {
	const { email, name } = user;

	logger.info(`Creating new user with email ${email} and name ${name}`);

	const newUser = await prisma.user.create({
		data: { email, name }
	});

	return newUser;
}

async function updateUser(userId: number, data: any) {
	logger.info(`Updating user fields ${Object.keys(data)} for userId ${userId}`);

	const updatedUser = await prisma.user.update({
		where: {
			id: userId
		},
		data
	});

	return updatedUser;
}

async function deleteUser(userId: number) {
	logger.info(`Deleting user with userId: ${userId}`);

	const deletedUser = await prisma.user.delete({
		where: {
			id: userId
		}
	});

	return deletedUser;
}

export { createUser, updateUser, deleteUser };
