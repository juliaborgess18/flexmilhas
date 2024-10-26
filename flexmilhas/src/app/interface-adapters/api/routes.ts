import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CriarUsuarioController } from "../controllers/CriarUsuarioController";
import { CriarMilhaController } from "../controllers/CriarMilhaController";
import { CriarMovimentacaoController } from "../controllers/CriarMovimentacaoController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    
    fastify.post("/usuario", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CriarUsuarioController().handle(request, reply);
    })
    
    fastify.post("/milha", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CriarMilhaController().handle(request, reply);
    })
    
    fastify.post("/movimentacao", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CriarMovimentacaoController().handle(request, reply);
    })

}