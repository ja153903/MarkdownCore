import winston from 'winston';

import { LOGGING_LEVELS, LOGGING_LEVELS_COLORS } from '../constants/logger';

const WINSTON_LOGGING_LEVEL_VALUES = {
	[LOGGING_LEVELS.ERROR]: 0,
	[LOGGING_LEVELS.WARN]: 1,
	[LOGGING_LEVELS.INFO]: 2,
	[LOGGING_LEVELS.HTTP]: 3,
	[LOGGING_LEVELS.DEBUG]: 4
}

function getLoggerLevel() {
	const env = process.env.NODE_ENV || 'development';
	const isDevelopment = env === 'development';

	return isDevelopment ? LOGGING_LEVELS.DEBUG : LOGGING_LEVELS.WARN;
}

winston.addColors(LOGGING_LEVELS_COLORS);

const winstonFormatSettings = winston.format.combine(
	winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
	winston.format.colorize({ all: true }),
	winston.format.printf(
		(info) => `${info.timestamp} ${info.level}: ${info.message}`
	)
);

const winstonTransports = [
	new winston.transports.Console(),
	new winston.transports.File({
		filename: 'logs/error.log',
		level: LOGGING_LEVELS.ERROR
	}),
	new winston.transports.File({ filename: 'logs/all.log' })
];

export default winston.createLogger({
	level: getLoggerLevel(),
	levels: WINSTON_LOGGING_LEVEL_VALUES,
	format: winstonFormatSettings,
	transports: winstonTransports
});
