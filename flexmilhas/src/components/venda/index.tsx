export function VenderMilha() {
    return (
        <div className="flex-1 max-w-8xl p-4 bg-gray-100 mx-auto">
            <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Venda suas milhas agora!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">

                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="upload" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-2text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18M3 12h18"></path>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para fazer upload</span> ou arraste o arquivo</p>
                                    <p className="text-xs text-gray-500">SVG, PNG, JPG ou GIF (máximo 2 MB)</p>
                                </div>
                                <input id="upload" type="file" className="hidden" accept="image/*" />
                            </label>
                        </div>


                        <div>
                            <label htmlFor="descricao" className="block text-sm font-medium leading-6 text-gray-900">
                                Descrição
                            </label>
                            <div className="mt-2">
                                <input
                                    id="descricao"
                                    name="text"
                                    type="text"
                                    required
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="quantidade" className="block text-sm font-medium leading-6 text-gray-900">
                                Quantidade
                            </label>
                            <div className="mt-2">
                                <input
                                    id="quantidade"
                                    name="text"
                                    type="text"
                                    required
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="dataValidade" className="block text-sm font-medium leading-6 text-gray-900">
                                Data de Validade
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dataValidade"
                                    name="date"
                                    type="date"
                                    required
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Vender
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}