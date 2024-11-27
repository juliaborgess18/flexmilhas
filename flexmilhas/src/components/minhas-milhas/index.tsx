import React from "react";

export function MinhasMilhas() {

  return(
    <>
      <h1 className="text-5xl font-extrabold dark:text-white mb-5">Suas Milhas</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div className="card">
          <a href="#" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="w-full h-48 relative">
              <img
                className="absolute inset-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://d3rwujusajfqlr.cloudfront.net/uploads/cb_790d1cac22ebabb1c8c2eba2d20f221b/latam/images/latam-airlines-logo.png"
                alt="Companhia LATAM"
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                LATAM Airlines
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Validade: 21/12/2024
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Valor: 1500.00
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="#" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="w-full h-48 relative">
              <img
                className="absolute inset-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Logo_da_Azul_Linhas_A%C3%A9reas_Brasileiras.svg/500px-Logo_da_Azul_Linhas_A%C3%A9reas_Brasileiras.svg.png"
                alt="Companhia Azul Linhas Aéreas Brasileiras"
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Azul Linhas Aéreas Brasileiras
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Validade: 24/02/2025
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Valor: 1000.00
              </p>
            </div>
          </a>
        </div>

      </div>
    </>
  );
}
