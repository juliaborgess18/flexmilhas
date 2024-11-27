// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransferContract {
    event Transfer(address indexed from, address indexed to, uint256 amount);

    function transferTo(address payable _to) external payable {
        require(msg.value > 0, "Valor deve ser maior que zero");
        _to.transfer(msg.value);
        emit Transfer(msg.sender, _to, msg.value);
    }
}
