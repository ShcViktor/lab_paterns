const LightWeightShip = require('./LightWeightShip');
const MediumShip = require('./MediumShip');
const HeavyShip = require('./HeavyShip');

class ShipFactory {
    static createShip(type, ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM) {
        switch (type) {
            case 'LightWeight':
                return new LightWeightShip(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM);
            case 'Medium':
                return new MediumShip(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM);
            case 'Heavy':
                return new HeavyShip(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM);
            default:
                throw new Error("Unknown ship type");
        }
    }
}

module.exports = ShipFactory;
