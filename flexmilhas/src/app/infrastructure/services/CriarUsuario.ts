import prismaClient from "../prisma";
import { Usuario } from "../../domain/entities/models/Usuario";

class CriarUsuario{
    async execute(usuario: Usuario){
        if (!usuario || !usuario.nome || !usuario.email || !usuario.senha ){
            throw new Error("Preencha todos os campos!")
        }

        try {
            const novoUsuario = await prismaClient.usuario.create({
                data: {
                    nome: usuario.nome,
                    email: usuario.email,
                    senha: usuario.senha,  
                }
            });

            return novoUsuario;
        } catch (error) {
            throw new Error(`Erro ao criar usuário`);
        }
    }
}

export { CriarUsuario }