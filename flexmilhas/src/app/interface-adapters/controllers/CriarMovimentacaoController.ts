import { CriarMovimentacao } from "../../infrastructure/services/CriarMovimentacao";
import { Movimentacao } from "../../entities/models/Movimentacao";
import { FastifyReply, FastifyRequest } from "fastify";

export class CriarMovimentacaoController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const movimentacaoModel = request.body as Movimentacao ;
        console.log(movimentacaoModel);
        const criarMovimentacao = new CriarMovimentacao();
        const movimentacao = await criarMovimentacao.execute( movimentacaoModel );
        reply.send(movimentacao);
    }
}
