const HeavyContainer = require('./HeavyContainer');

class RefrigeratedContainer extends HeavyContainer {
    consumption() {
        return this.weight * 5.0;
    }
}

module.exports = RefrigeratedContainer;
