const Item = require('./Item');

class SmallItem extends Item {
    constructor(ID, weight, count, containerID) {
        super(ID, weight, count, containerID);
    }
}

module.exports = SmallItem;
