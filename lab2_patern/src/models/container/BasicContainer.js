const Container = require('./Container');

class BasicContainer extends Container {
    constructor(ID, weight) {
        if (weight > 3000) throw new Error("BasicContainer weight must be <= 3000");
        super(ID, weight);
    }

    consumption() {
        return this.weight * 2.5;
    }
}

module.exports = BasicContainer;
