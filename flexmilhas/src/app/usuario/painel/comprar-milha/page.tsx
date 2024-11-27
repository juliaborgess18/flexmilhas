import { ComprarMilha } from "@/components/comprar";
import { Sidebar } from "@/components/sidebar";

export default function Index(){
    return(
        <Sidebar>
            <div className="flex justify-center min-w-screen">
                <ComprarMilha />
            </div>
        </Sidebar> 
    )
}