const Ship = require('./Ship');

class HeavyShip extends Ship {
    constructor(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM) {
        super(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM);
    }
}

module.exports = HeavyShip;
