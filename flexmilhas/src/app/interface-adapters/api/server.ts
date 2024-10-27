import Fastify from 'fastify';
import { routes } from './routes';

const app = Fastify({ logger: true })

const start = async () => {
    try {
        // Registra as rotas definidas em routes.ts
        await app.register(routes);

        // Inicia o servidor na porta 3001
        await app.listen({ port: 3001, host: '0.0.0.0' });
        console.log('Server running at http://localhost:3001');
    } catch (err) {
        // Em caso de erro, loga e encerra o processo
        app.log.error(err);
        process.exit(1);
    }
};

start();