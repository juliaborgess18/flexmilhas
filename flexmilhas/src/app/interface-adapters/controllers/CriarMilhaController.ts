import { Milha } from "@/app/domain/entities/models/Milha";
import { CriarMilha } from "../../infrastructure/services/CriarMilha";
import { FastifyReply, FastifyRequest } from "fastify";


class CriarMilhaController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const milhaModel = request.body as Milha ;
        const criarMilha = new CriarMilha();
        const milha = await criarMilha.execute( milhaModel );
        reply.send(milha);
    }
}

export { CriarMilhaController }