import { Sidebar } from "@/components/sidebar";
import { VenderMilha } from "@/components/venda";

export default function Index(){
    return(
        <Sidebar>
            <div className="flex justify-center min-w-screen">
                <VenderMilha />
            </div>
        </Sidebar> 
    )
}