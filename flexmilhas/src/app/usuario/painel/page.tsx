import { Sidebar } from '@/components/sidebar'

export default function Index({ children }: { children: React.ReactNode }) {
    return (
        <Sidebar>
            <div>
                <h1 className="text-5xl font-extrabold dark:text-white">Bem Vindo ao flex-milhas</h1>
                <hr className="mb-10 mt-4"/>
                
                <p className="my-4 text-lg text-gray-500">No Flex-Milhas, conectamos você às melhores oportunidades para comprar e vender milhas de forma prática, segura e vantajosa. Seja você um acumulador de milhas ou alguém em busca de economizar em viagens, aqui é o lugar certo para transformar suas milhas em valor real.</p>

                <h2 className="text-4xl font-extrabold dark:text-white my-8">Ganhe Dinheiro com Suas Milhas</h2>
                <p className="my-4 text-lg text-gray-500">Não deixe suas milhas expirarem ou ficarem paradas! No Flex-Milhas, você pode vendê-las rapidamente e obter dinheiro extra para investir como quiser. Oferecemos uma plataforma simples, confiável e com as melhores taxas do mercado.</p>

                <h2 className="text-4xl font-extrabold dark:text-white my-8">Viaje Mais Gastando Menos</h2>
                <p className="my-4 text-lg text-gray-500">Está planejando uma viagem? Compre milhas no Flex-Milhas e economize em passagens aéreas das principais companhias. Com poucos cliques, você encontra as melhores ofertas e pode garantir aquela viagem dos sonhos sem comprometer o orçamento.</p>

                <h2 className="text-4xl font-extrabold dark:text-white my-8">Por que Escolher o Flex-Milhas?</h2>
                <ul>
                <li className="my-4 text-lg text-gray-500">Segurança Garantida: Todas as transações são realizadas com proteção e transparência.</li>
                <li className="my-4 text-lg text-gray-500">Praticidade: Venda ou compre milhas de maneira rápida e sem burocracia.</li>
                <li className="my-4 text-lg text-gray-500">Melhores Oportunidades: Trabalhamos com diversas companhias aéreas para oferecer opções variadas e competitivas.</li>
                <li className="my-4 text-lg text-gray-500">Atendimento de Qualidade: Nossa equipe está pronta para ajudar em cada etapa do processo.</li>
                </ul>
            </div>
        </Sidebar>  
    )
}