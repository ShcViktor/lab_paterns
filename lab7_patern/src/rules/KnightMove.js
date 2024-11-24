const MoveRule = require('./MoveRule');

class KnightMove extends MoveRule {
  getAllMoves() {
    const [x, y] = this.position;
    const potentialMoves = [
      [x + 2, y + 1], [x + 2, y - 1],
      [x - 2, y + 1], [x - 2, y - 1],
      [x + 1, y + 2], [x + 1, y - 2],
      [x - 1, y + 2], [x - 1, y - 2]
    ];
    return potentialMoves.filter(move => move.every(coord => coord >= 1 && coord <= 8));
  }
}

module.exports = KnightMove;
