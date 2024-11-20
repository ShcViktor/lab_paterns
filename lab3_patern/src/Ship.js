class Ship {
  constructor(ID, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM) {
      this.ID = ID;
      this.fuel = fuel;
      this.currentPort = currentPort;
      this.totalWeightCapacity = totalWeightCapacity;
      this.maxContainers = maxContainers;
      this.fuelConsumptionPerKM = fuelConsumptionPerKM;
  }

  addContainer(container) {
      if (this.maxContainers > 0) {
          this.maxContainers--;
          console.log(`Container ${container.ID} added to Ship ${this.ID}`);
      }
  }
}

module.exports = Ship;
