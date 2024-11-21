export class Movimentacao {
    private id: string;              
    public usuarioVendedor: string; 
    public usuarioComprador: string;
    public milhaId: string;          
    public dataVenda: string;  

    constructor(id:string,usuarioVendedor:string,usuarioComprador:string,milhaId:string,dataVenda:string){
        this.id = id;
        this.usuarioVendedor = usuarioVendedor;
        this.usuarioComprador = usuarioComprador;
        this.milhaId = milhaId; 
        this.dataVenda = dataVenda;
    }
    
}