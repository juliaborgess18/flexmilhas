import { FastifyRequest, FastifyReply } from 'fastify';
import { CriarUsuario } from '../../infrastructure/services/CriarUsuario';
import { Usuario } from "../../entities/models/Usuario";

class CriarUsuarioController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const usuarioModel = request.body as Usuario ;
        console.log(usuarioModel);
        const criarUsuario = new CriarUsuario();
        const usuario = await criarUsuario.execute( usuarioModel );
        reply.send(usuario);
    }
}

export { CriarUsuarioController }