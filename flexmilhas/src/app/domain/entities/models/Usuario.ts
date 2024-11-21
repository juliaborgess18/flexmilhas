// import { Milha } from './milha';

class Usuario {
    private id?: number;
    public nome: string; 
    public email: string; 
    public senha: string; 

    constructor(nome:string, email:string, senha:string, id?:number, ){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha; 
    }
}

export { Usuario }