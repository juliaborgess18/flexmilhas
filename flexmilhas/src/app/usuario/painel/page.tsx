import { Sidebar } from '@/components/sidebar'

export default function Index({ children }: { children: React.ReactNode }) {
    return (
        <Sidebar>
            <h1 className="text-5xl font-extrabold dark:text-white">Bem Vindo ao flex-milhas</h1> 

            <h2>Quem somos</h2>
            <p>No Flex-Milhas, conectamos você às melhores oportunidades para comprar e vender milhas de forma prática, segura e vantajosa. Seja você um acumulador de milhas ou alguém em busca de economizar em viagens, aqui é o lugar certo para transformar suas milhas em valor real.</p>

            <h2>Ganhe Dinheiro com Suas Milhas</h2>
            Não deixe suas milhas expirarem ou ficarem paradas! No Flex-Milhas, você pode vendê-las rapidamente e obter dinheiro extra para investir como quiser. Oferecemos uma plataforma simples, confiável e com as melhores taxas do mercado.

            <h2>Viaje Mais Gastando Menos</h2>
            Está planejando uma viagem? Compre milhas no Flex-Milhas e economize em passagens aéreas das principais companhias. Com poucos cliques, você encontra as melhores ofertas e pode garantir aquela viagem dos sonhos sem comprometer o orçamento.

            <h2>Por que Escolher o Flex-Milhas?</h2>

            <ul>
                <li>Segurança Garantida: Todas as transações são realizadas com proteção e transparência.</li>
                <li>Praticidade: Venda ou compre milhas de maneira rápida e sem burocracia.</li>
                <li>Melhores Oportunidades: Trabalhamos com diversas companhias aéreas para oferecer opções variadas e competitivas.</li>
                <li>Atendimento de Qualidade: Nossa equipe está pronta para ajudar em cada etapa do processo.</li>
            </ul>
            

            <h2>Como Funciona?</h2>
            <ul>
                <li>Venda de Milhas: Informe sua quantidade de milhas e receba uma proposta personalizada. Após a aprovação, o valor é transferido para você em pouco tempo.</li>
                <li>Compra de Milhas: Escolha a companhia aérea desejada e adquira milhas a preços atrativos para usar em suas próximas viagens.</li>
                <li>No Flex-Milhas, transformamos possibilidades em experiências! Explore, negocie e descubra um novo jeito de aproveitar suas milhas.</li>
            </ul>
            
            <p><strong>Comece agora mesmo!</strong></p>
        </Sidebar>
    )
}