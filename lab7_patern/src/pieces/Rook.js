const Piece = require('./Piece');
const RookMove = require('../rules/RookMove');

class Rook extends Piece {
  constructor(position, color) {
    super(position, color, new RookMove(position));
  }
}

module.exports = Rook;
