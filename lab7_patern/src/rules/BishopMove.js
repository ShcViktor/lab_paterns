const MoveRule = require('./MoveRule');

class BishopMove extends MoveRule {
  getAllMoves() {
    const [x, y] = this.position;
    const moves = [];
    for (let i = 1; i <= 7; i++) {
      moves.push([x + i, y + i], [x + i, y - i], [x - i, y + i], [x - i, y - i]);
    }
    return moves.filter(move => move.every(coord => coord >= 1 && coord <= 8));
  }
}

module.exports = BishopMove;
