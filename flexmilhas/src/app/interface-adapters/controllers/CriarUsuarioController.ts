import { FastifyRequest, FastifyReply } from 'fastify';
import { CriarUsuario } from '../../infrastructure/services/CriarUsuario';
import { Usuario } from "../../domain/entities/models/Usuario";

class CriarUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { nome, email, senha } = request.body as { nome: string; email: string; senha: string };

        console.log("Dados recebidos no backend:", request.body);

        if (!nome || !email || !senha) {
            return reply.status(400).send({ error: "Preencha todos os campos!" });
        }

        try {
            const usuarioModel = new Usuario(nome, email, senha);
            const criarUsuario = new CriarUsuario();
            const usuario = await criarUsuario.execute(usuarioModel);
            return reply.status(201).send(usuario);
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error);
            const errorMessage = error instanceof Error ? error.message : "Erro interno no servidor";
            return reply.status(500).send({ error: errorMessage });
        }
    }
}

export { CriarUsuarioController };
