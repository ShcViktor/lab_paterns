const HeavyContainer = require('./HeavyContainer');

class LiquidContainer extends HeavyContainer {
  constructor(id, weight) {
    super(id, weight);
  }

  consumption() {
    return 4.00 * this.weight;  // Споживання пального для рідких вантажів
  }
}

module.exports = LiquidContainer;
