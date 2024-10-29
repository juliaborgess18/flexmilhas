import { Sidebar } from "@/components/sidebar";
import { VenderMilha } from "@/components/venda";


export default function Index(){
    return (
    
    <div>
        <div className="flex min-h-screen"> 
            <Sidebar children={undefined}></Sidebar> 
            <VenderMilha></VenderMilha>
        </div>
    </div>

    )
}