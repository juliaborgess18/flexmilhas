export function ComprarMilha() {
    return (
        <div className="flex-1 max-w-8xl p-4 bg-gray-100 mx-auto">
            <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="idMilha" className="block text-sm font-medium leading-6 text-gray-900">
                                Identificação da Milha
                            </label>
                            <div className="mt-2">
                                <input
                                    id="idMilha"
                                    name="text"
                                    type="text"
                                    required
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Função de procurar milha no mongoDB, juntamente trazer o hash da carteira dona da milha */}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Comprar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}