const Container = require('./Container');

class HeavyContainer extends Container {
  constructor(id, weight) {
    super(id, weight);
  }

  consumption() {
    return 3.00 * this.weight;  // Споживання пального для важкого контейнера
  }
}

module.exports = HeavyContainer;
