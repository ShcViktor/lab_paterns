const Item = require('./Item');

class HeavyItem extends Item {
    constructor(ID, weight, count, containerID) {
        super(ID, weight, count, containerID);
    }
}

module.exports = HeavyItem;
