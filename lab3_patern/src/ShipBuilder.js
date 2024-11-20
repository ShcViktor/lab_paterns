class ShipBuilder {
  constructor() {
      this.ship = {};
  }

  setID(ID) {
      this.ship.ID = ID;
      return this;
  }

  setFuel(fuel) {
      this.ship.fuel = fuel;
      return this;
  }

  setCurrentPort(port) {
      this.ship.currentPort = port;
      return this;
  }

  setTotalWeightCapacity(weightCapacity) {
      this.ship.totalWeightCapacity = weightCapacity;
      return this;
  }

  setMaxContainers(maxContainers) {
      this.ship.maxContainers = maxContainers;
      return this;
  }

  setFuelConsumptionPerKM(consumption) {
      this.ship.fuelConsumptionPerKM = consumption;
      return this;
  }

  build() {
      return this.ship;
  }
}

module.exports = ShipBuilder;
