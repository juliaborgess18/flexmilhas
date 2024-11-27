import { Sidebar } from "@/components/sidebar";

export default function Index() {
    return (
        <Sidebar>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Movimentações da conta
            </h2>

            <div className="p-4 p-10 justify-center">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="flex-1 text-grey-darker">
                                <div className="flex items-center">
                                    <div className="fill-current text-white shadow h-8 w-8 flex items-center bg-pink mr-3 rounded-full">
                                        <svg className="h-4 w-4 flex-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" /></svg>
                                    </div>
                                    <span className="font-semibold text-grey-darker">Movimentação de ETH no valor de 0.0015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-grey-lighter flex items-center">
                        <span className="inline-block rounded-full text-sm text-grey ml-3">Efetuada à 2h atrás</span>
                    </div>
                </div>
            </div>

            <div className="p-4 p-10 justify-center">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="flex-1 text-grey-darker">
                                <div className="flex items-center">
                                    <div className="fill-current text-white shadow h-8 w-8 flex items-center bg-pink mr-3 rounded-full">
                                        <svg className="h-4 w-4 flex-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" /></svg>
                                    </div>
                                    <span className="font-semibold text-grey-darker">Movimentação de ETH no valor de 0.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-grey-lighter flex items-center">
                        <span className="inline-block rounded-full text-sm text-grey ml-3">Efetuada à 2h atrás</span>
                    </div>
                </div>
            </div>

            <div className="p-4 p-10 justify-center">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="flex-1 text-grey-darker">
                                <div className="flex items-center">
                                    <div className="fill-current text-white shadow h-8 w-8 flex items-center bg-pink mr-3 rounded-full">
                                        <svg className="h-4 w-4 flex-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" /></svg>
                                    </div>
                                    <span className="font-semibold text-grey-darker">Movimentação de ETH no valor de 0.85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-grey-lighter flex items-center">
                        <span className="inline-block rounded-full text-sm text-grey ml-3">Efetuada à 2h atrás</span>
                    </div>
                </div>
            </div>

            <div className="p-4 p-10 justify-center">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="flex-1 text-grey-darker">
                                <div className="flex items-center">
                                    <div className="fill-current text-white shadow h-8 w-8 flex items-center bg-pink mr-3 rounded-full">
                                        <svg className="h-4 w-4 flex-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" /></svg>
                                    </div>
                                    <span className="font-semibold text-grey-darker">Movimentação de ETH no valor de 1.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-grey-lighter flex items-center">
                        <span className="inline-block rounded-full text-sm text-grey ml-3">Efetuada à 2h atrás</span>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}