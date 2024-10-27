import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const app = Fastify({ logger: true });

const start = async () => {
  try {
    await app.register(cors, {
      origin: true, 
      methods: ["GET", "POST", "PUT", "DELETE"], 
    });

    await app.register(routes);

    await app.listen({ port: 3001, host: '0.0.0.0' });
    console.log('Server running at http://localhost:3001');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
