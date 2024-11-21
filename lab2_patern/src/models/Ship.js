const IShip = require('../interfaces/IShip');

class Ship extends IShip {
    constructor(
        ID,
        fuel,
        currentPort,
        totalWeightCapacity,
        maxNumberOfAllContainers,
        maxNumberOfHeavyContainers,
        maxNumberOfRefrigeratedContainers,
        maxNumberOfLiquidContainers,
        fuelConsumptionPerKM
    ) {
        super();
        this.ID = ID;
        this.fuel = fuel;
        this.currentPort = currentPort;
        this.totalWeightCapacity = totalWeightCapacity;
        this.maxNumberOfAllContainers = maxNumberOfAllContainers;
        this.maxNumberOfHeavyContainers = maxNumberOfHeavyContainers;
        this.maxNumberOfRefrigeratedContainers = maxNumberOfRefrigeratedContainers;
        this.maxNumberOfLiquidContainers = maxNumberOfLiquidContainers;
        this.fuelConsumptionPerKM = fuelConsumptionPerKM;
        this.containers = [];
    }

    sailTo(port) {
        const distance = this.currentPort.getDistance(port);
        const requiredFuel = distance * this.fuelConsumptionPerKM;

        if (this.fuel >= requiredFuel) {
            this.fuel -= requiredFuel;
            this.currentPort.outgoingShip(this);
            port.incomingShip(this);
            this.currentPort = port;
            return true;
        }
        return false;
    }

    reFuel(fuelAmount) {
        this.fuel += fuelAmount;
    }

    load(container) {
        if (this.containers.length < this.maxNumberOfAllContainers && 
            this.getCurrentWeight() + container.weight <= this.totalWeightCapacity) {
            this.containers.push(container);
            return true;
        }
        return false;
    }

    unLoad(container) {
        const index = this.containers.findIndex((c) => c.ID === container.ID);
        if (index > -1) {
            this.containers.splice(index, 1);
            return true;
        }
        return false;
    }

    getCurrentWeight() {
        return this.containers.reduce((total, container) => total + container.weight, 0);
    }
}

module.exports = Ship;
