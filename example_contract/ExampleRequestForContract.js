import './App.css';
import React, { useState, useEffect } from 'react';
import { abi, getContract, getSignerAddress, contractAddress } from "./abi/flexmilhas.abi"

// Arquivo de demonstração de como consumir o flexmilhas.abi.js, está aplicação está provisoriamente em react apenas para demostração 

function ExampleRequestForContract() {
  
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  async function connectToMetaMask() {      
    setContract(await getContract())
    setUserAddress(await getSignerAddress());
  }

  useEffect(() => {
    connectToMetaMask();
  }, [contractAddress, abi]);

  async function getBalance() {
    let result = await contract.balanceOf(userAddress);
    // Não se esqueça que o javascript não conhece o valor retornado pelo contrato, logo ele não consegue definir um tipo para ele o que faz necessário a chamada ao
    // método toString() para o js entender que ele deve tratar o resultado da requisição a abi como uma string. 
    setDisplayValue(result.toString())
  }

  return (
    <>
      <h1>FlexMilhas</h1>
      <hr />
      <h2>Endereço do Contrato: {contractAddress}</h2>
      <h2>Endereço da carteira: {userAddress}</h2>
      <hr />

      <button type="submit" onClick={() => getBalance()}>Buscar Balanço</button>
      <p>Valor na carteira: {displayValue}</p>
    </>
  );
}

export default ExampleRequestForContract;