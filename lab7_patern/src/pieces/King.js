const Piece = require('./Piece');
const KingMove = require('../rules/KingMove');

class King extends Piece {
  constructor(position, color) {
    super(position, color, new KingMove(position));
  }
}

module.exports = King;
