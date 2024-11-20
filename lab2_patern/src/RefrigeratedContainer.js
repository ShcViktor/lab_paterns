const HeavyContainer = require('./HeavyContainer');

class RefrigeratedContainer extends HeavyContainer {
  constructor(id, weight) {
    super(id, weight);
  }

  consumption() {
    return 5.00 * this.weight;  // Споживання пального для охолоджених контейнерів
  }
}

module.exports = RefrigeratedContainer;
