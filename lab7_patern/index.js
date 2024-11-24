const Knight = require('./src/pieces/Knight');
const Bishop = require('./src/pieces/Bishop');
const King = require('./src/pieces/King');
const Rook = require('./src/pieces/Rook');

function main() {
  const knight = new Knight([3, 3], 'White');
  knight.printInfo();
  console.log('Knight moves:', knight.moveRule.getAllMoves());

  const bishop = new Bishop([4, 4], 'Black');
  bishop.printInfo();
  console.log('Bishop moves:', bishop.moveRule.getAllMoves());

  const king = new King([5, 5], 'White');
  king.printInfo();
  console.log('King moves:', king.moveRule.getAllMoves());

  const rook = new Rook([1, 1], 'Black');
  rook.printInfo();
  console.log('Rook moves:', rook.moveRule.getAllMoves());
}

main();
