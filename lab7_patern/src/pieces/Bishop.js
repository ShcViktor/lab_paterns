const Piece = require('./Piece');
const BishopMove = require('../rules/BishopMove');

class Bishop extends Piece {
  constructor(position, color) {
    super(position, color, new BishopMove(position));
  }
}

module.exports = Bishop;
