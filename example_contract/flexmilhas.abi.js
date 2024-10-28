import { ethers } from "ethers";

/// TODO: Mudar para TS
// ---
// Sempre que um novo contrato é gerado esse valor muda, por tanto sempre preste atenção no valor desta contante. Recomendo trocar essa abordagem hard coded por uma váriavel de ambiente, algo como [const contractAddress = env("CONTRATC_ADDRESS");]
export const contractAddress = process.env.SMART_CONTRACT;

export  const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

export const getProvider = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider(window.ethereum);
    return provider;
}

export const getSigner = async () => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    return signer;
}

export const getContract = async () => {
    const signer = await getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    return contract;
}

export const getSignerAddress = async () => {
    const signer = await getSigner();
    return signer.getAddress();
}