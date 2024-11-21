import React from "react";
import { Navbar } from '@/components/navbar'
import { Catalogo } from '@/components/catalogo'
import { Rodape } from '@/components/rodape'

const NewArrivals = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>  
      <h2 className="text-3xl font-medium text-center mt-20">Viaje pelo Brasil e Mundo com ofertas imperdíveis!</h2>  
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
        <aside className="w-1/4">
            <div className="mb-8">
              <ul className="space-y-2">
              <h2 className="text-lg font-medium mt-20">Escolha seu Destino</h2>
                {["Brasil", "Estados Unidos", "França", "Japão", "Alemanha", "Canadá", "Itália", "Espanha", "Austrália", "Nova Zelândia", "Argentina", "Chile", "México", "Portugal", "Grécia", "Turquia", "China", "Índia", "África do Sul", "Egito", "Tailândia", "Indonésia", "Suíça", "Holanda", "Suécia", "Noruega", "Dinamarca", "Coreia do Sul", "Arábia Saudita", "Emirados Árabes Unidos"].map((color) => (
                  <li key={color}>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded-full mr-2" />
                      {color}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <Catalogo></Catalogo>
        </div>
      </main>
      <Rodape></Rodape>          
    </div>
  );
};

export default NewArrivals;
