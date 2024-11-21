const Container = require('./Container');

class HeavyContainer extends Container {
    constructor(ID, weight) {
        if (weight <= 3000) throw new Error("HeavyContainer weight must be > 3000");
        super(ID, weight);
    }

    consumption() {
        return this.weight * 3.0;
    }
}

module.exports = HeavyContainer;
