import { allowedOriginRegex } from '@/utils/Constants';
import cors from '@fastify/cors';
import { fastifySensible } from '@fastify/sensible';
import underPressure from '@fastify/under-pressure';
import { fastifyMultipart } from '@fastify/multipart';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

async function core(fastify: FastifyInstance) {
	await fastify.register(underPressure, {
		maxEventLoopDelay: 1000,
		maxHeapUsedBytes: 1000000000,
		maxRssBytes: 1000000000,
		maxEventLoopUtilization: 0.98
	});

	await fastify.register(fastifySensible);

	await fastify.register(cors, {
		credentials: true,
		origin: (origin, cb) => {
			if (!origin || origin === '' || process.env.NODE_ENV !== 'prod') {
				return cb(null, true);
			}

			if (allowedOriginRegex.test(origin)) {
				return cb(null, origin);
			}

			return cb(new Error('Not allowed by CORS'), false);
		},
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		preflightContinue: true,
		optionsSuccessStatus: 204
	});

	await fastify.register(fastifyMultipart, {
		attachFieldsToBody: true,
		limits: {
			fileSize: 1024 * 1024 * 5,
			fieldNameSize: 100,
			fields: 20,
			fieldSize: 1024 * 10,
			files: 1
		}
	});
}

export default fp(core, { name: 'core' });
