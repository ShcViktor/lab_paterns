const MoveRule = require('./MoveRule');

class KingMove extends MoveRule {
  getAllMoves() {
    const [x, y] = this.position;
    const potentialMoves = [
      [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1],
      [x + 1, y + 1], [x + 1, y - 1], [x - 1, y + 1], [x - 1, y - 1]
    ];
    return potentialMoves.filter(move => move.every(coord => coord >= 1 && coord <= 8));
  }
}

module.exports = KingMove;
