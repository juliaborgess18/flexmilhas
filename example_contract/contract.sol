// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.2;
contract FlexMilhasTransfer {

    // Função que tranfere algum valor para o vendedor das milhas, está quebrada.
    function transfer(address payable _to, uint256 amount) public payable {
        _to.transfer(amount);
    }

    // Função para consultar o saldo do contrato
    function balanceOf(address _owner) public view returns (uint256) {
        return _owner.balance;
    }
 
}