'use client';

import { useState } from "react";
import { ethers } from 'ethers';

export function ComprarMilha() {
    const [myAddress, setMyAddress] = useState<string>("");
    const [amount, setAmount] = useState<string>('');
    const [balance, setBalance] = useState<string>('');
    const [message, setMessage] = useState<string>('Preencha todos os campos antes de iniciar a transação!');

    const contractAddress = '0x3fD7556A9d49aD5eed53C04ba004ec5fF21e53D5';
    const contractABI = [
        "function transferTo(address _to) public payable",
    ];

    async function connect() {
        if (!(window as any).ethereum) {
            setMessage('MetaMask não encontrado');
            return;
        }

        try {
            const provider = new ethers.BrowserProvider((window as any).ethereum);
            await provider.send('eth_requestAccounts', []);
            const signer = provider.getSigner();
            const address = await (await signer).getAddress();
            setMyAddress(address);
            setMessage('Conectado ao MetaMask');
        } catch (error) {
            setMessage((error as Error).message);
        }
    }

    async function sendTransaction(e: React.FormEvent) {
        e.preventDefault(); // Evita a submissão padrão do formulário

        if (!amount || parseFloat(amount) <= 0) {
            setMessage('Insira um valor válido');
            return;
        }

        try {
            const provider = new ethers.BrowserProvider((window as any).ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(contractAddress, contractABI, await signer);

            const transaction = await contract.transferTo(
                myAddress,
                { value: ethers.parseEther(amount) }
            );

            setMessage('Transação enviada. Aguardando confirmação...');
            await transaction.wait();
            setMessage('Transação confirmada!');
        } catch (error) {
            setMessage((error as Error).message);
        }
    }

    return (
        <div className="max-w-8xl p-4 bg-gray-100 mx-auto">
            <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Compre milhas agora!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={sendTransaction}>
                        <div>
                            <label htmlFor="transferirDe" className="block text-sm font-medium leading-6 text-gray-900">
                                De
                            </label>
                            <div className="mt-2">
                                <input
                                    id="transferirPara"
                                    type="text"
                                    value={myAddress}
                                    onChange={(e) => setMyAddress(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="transferirPara" className="block text-sm font-medium leading-6 text-gray-900">
                                Para
                            </label>
                            <div className="mt-2">
                                <input
                                    id="transferirPara"
                                    type="text"
                                    value={contractAddress}
                                    onChange={(e) => setMyAddress(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="valorMilha" className="block text-sm font-medium leading-6 text-gray-900">
                                Valor
                            </label>
                            <div className="mt-2">
                                <input
                                    id="valorMilha"
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={sendTransaction}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Comprar
                            </button>
                        </div>
                        <p className="text-center text-sm mt-5">Status: {message}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
