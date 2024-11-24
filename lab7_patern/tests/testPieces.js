const Knight = require('../src/pieces/Knight');
const Bishop = require('../src/pieces/Bishop');

function testPieces() {
  const knight = new Knight([3, 3], 'White');
  console.log(knight.toString());
  console.log('Knight moves:', knight.moveRule.getAllMoves());

  const bishop = new Bishop([4, 4], 'Black');
  console.log(bishop.toString());
  console.log('Bishop moves:', bishop.moveRule.getAllMoves());
}

testPieces();
