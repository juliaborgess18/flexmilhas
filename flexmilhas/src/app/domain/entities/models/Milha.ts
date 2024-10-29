
export class Milha {
    private id: number; 
    public descricao: string; 
    public quantidade: string; 
    public dataValidade: string;

    constructor(id:number, quantidade:string, descricao:string, dataValidade:string) {
        this.id = id; 
        this.descricao = descricao; 
        this.quantidade = descricao; 
        this.dataValidade = dataValidade; 
    }
}


