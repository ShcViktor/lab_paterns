class MoveRule {
  constructor(position) {
    this.position = position;
  }

  getAllMoves() {
    throw new Error("getAllMoves() must be implemented in subclass");
  }
}

module.exports = MoveRule;
