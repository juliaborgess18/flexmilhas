import React from "react";
import { Navbar } from '@/components/navbar'
import { Catalogo } from '@/components/catalogo'

const NewArrivals = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>  
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex space-x-8">
          <aside className="w-1/4">
            <div className="mb-8">
              <h2 className="text-lg font-medium mt-20">Escolha seu Destino</h2>
              <ul className="mt-5 space-y-2">
                {["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"].map((color) => (
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
    </div>
  );
};

export default NewArrivals;
