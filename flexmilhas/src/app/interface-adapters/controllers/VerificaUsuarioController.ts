import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class VerificarUsuarioController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, senha } = request.body as { email: string, senha:string };

    if (!email || !senha) {
      return reply.status(400).send({ error: "Preencha os campos obrigatórios." });
    }

    try {
      const usuarioExistente = await prisma.usuario.findFirst({
        where: {
          email: email, 
          senha: senha 
        },
      });

      if (usuarioExistente) {
        return reply.status(200).send({ exists: true, message: 'Usuário encontrado' });
      } else {
        return reply.status(404).send({ exists: false, message: 'Usuário não encontrado' });
      }
    } catch (error: any) {
      console.error('Erro ao buscar usuário:', error);
      return reply.status(500).send({ error: 'Erro interno no servidor' });
    }
  }
}

export { VerificarUsuarioController };
