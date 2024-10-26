import { Movimentacao } from "../../entities/models/Movimentacao";
import prismaClient from "../prisma";

export class CriarMovimentacao{
    async execute(movimentacao: Movimentacao){
        if (!movimentacao){
            throw new Error("Preencha todos os campos!")
        }

        try {
            const novoUsuario = await prismaClient.movimentacao.create({
                data: {
                    usuarioVendedor:  movimentacao.usuarioVendedor,
                    usuarioComprador: movimentacao.usuarioComprador,
                    milhaId:          movimentacao.milhaId,  
                    dataVenda:        movimentacao.dataVenda,  
                }
            });

            return novoUsuario;
        } catch (error) {
            throw new Error(`Erro ao criar movimentação`);
        }
    }
}