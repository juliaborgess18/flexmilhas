import prismaClient from "../prisma";
import { Milha } from "../../domain/entities/models/Milha";


class CriarMilha{
    async execute(milha: Milha){
        if (!milha || !milha.descricao ){
            throw new Error("Preencha todos os campos!")
        }

        try {
            const novaMilha = await prismaClient.milha.create({
                data: {
                    descricao: milha.descricao, 
                    dataValidade: milha.dataValidade, 
                }
            });

            return novaMilha;
        } catch (error) {
            throw new Error(`Erro ao criar milha`);
        }
    }
}

export { CriarMilha }