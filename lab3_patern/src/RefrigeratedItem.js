const HeavyItem = require('./HeavyItem');

class RefrigeratedItem extends HeavyItem {
    constructor(ID, weight, count, containerID) {
        super(ID, weight, count, containerID);
    }
}

module.exports = RefrigeratedItem;
