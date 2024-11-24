const Piece = require('./Piece');
const KnightMove = require('../rules/KnightMove');

class Knight extends Piece {
  constructor(position, color) {
    super(position, color, new KnightMove(position));
  }
}

module.exports = Knight;
