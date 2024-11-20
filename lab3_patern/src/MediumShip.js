const Ship = require('./Ship');

class MediumShip extends Ship {
    constructor(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM) {
        super(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM);
    }
}

module.exports = MediumShip;
