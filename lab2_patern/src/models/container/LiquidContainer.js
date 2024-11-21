const HeavyContainer = require('./HeavyContainer');

class LiquidContainer extends HeavyContainer {
    consumption() {
        return this.weight * 4.0;
    }
}

module.exports = LiquidContainer;
