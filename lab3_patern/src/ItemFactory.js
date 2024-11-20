const SmallItem = require('./SmallItem');
const HeavyItem = require('./HeavyItem');
const RefrigeratedItem = require('./RefrigeratedItem');
const LiquidItem = require('./LiquidItem');

class ItemFactory {
    static createItem(type, ID, weight, count, containerID) {
        switch (type) {
            case 'Small':
                return new SmallItem(ID, weight, count, containerID);
            case 'Heavy':
                return new HeavyItem(ID, weight, count, containerID);
            case 'Refrigerated':
                return new RefrigeratedItem(ID, weight, count, containerID);
            case 'Liquid':
                return new LiquidItem(ID, weight, count, containerID);
            default:
                throw new Error("Unknown item type");
        }
    }
}

module.exports = ItemFactory;
