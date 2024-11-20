const HeavyItem = require('./HeavyItem');

class LiquidItem extends HeavyItem {
    constructor(ID, weight, count, containerID) {
        super(ID, weight, count, containerID);
    }
}

module.exports = LiquidItem;
