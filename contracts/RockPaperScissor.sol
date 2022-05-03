// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RockPaperScissor is ERC721URIStorage, Ownable {
    constructor() ERC721("RockPaperScissor", "RPS") {}

    uint256 COUNTER;

    uint256 fee = 0.01 ether;

    mapping (address => uint256) addressToTokenBalance; 

    struct Card {
        uint256 tokenId;
        address owner;
        uint256 dna;
        uint256 level;
    }

    Card[] public cards;

    event NewCard(uint256 id, address indexed owner, uint256 dna);

    // Helpers
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        );
        return randomNum % _mod;
    }

    function updateFee(uint256 _fee) external onlyOwner {
        fee = _fee;
    }

    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    // Creation
    function _createCard() internal {
        uint256 randDna = _createRandomNum(10**16);
        Card memory newCard = Card(COUNTER, msg.sender, randDna, 1);
        cards.push(newCard);
        _safeMint(msg.sender, COUNTER);
        // _setTokenURI(COUNTER, tokenURI);
        emit NewCard(COUNTER, msg.sender, randDna);
        COUNTER++;
    }

    function createRandomCard() public payable {
        require(msg.value >= fee);
        for (int256 i = 0; i < 15; i++) {
            _createCard();
        }
        addressToTokenBalance[msg.sender] = 15;
    }

    // Getters
    function getCards() public view returns (Card[] memory) {
        return cards;
    }

    function getOwnerCards(address _owner) public view returns (Card[] memory) {
        Card[] memory result = new Card[](balanceOf(_owner));
        uint256 counter = 0;
        for (uint256 i = 0; i < cards.length; i++) {
            if (ownerOf(i) == _owner) {
                result[counter] = cards[i];
                counter++;
            }
        }
        return result;
    }

    // Actions
    function levelUp(uint256 _tokenId) public {
        require(ownerOf(_tokenId) == msg.sender);
        Card storage card = cards[_tokenId];
        card.level++;
    }

    function getTokenBalance(address _player) public view returns (uint256) {
        return addressToTokenBalance[_player];
    }
}
