import { ComprarMilha } from "@/components/comprar";
import { Sidebar } from "@/components/sidebar";

export default function Index(){
    return(
        <div>
        <div className="flex min-h-screen"> 
            <Sidebar children={undefined}></Sidebar> 
            <ComprarMilha></ComprarMilha>
        </div>
    </div>
    )
}