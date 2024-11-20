const fs = require('fs');
const Container = require('./Container');

class Ship {
  constructor(id, fuel, currentPort, totalWeightCapacity, maxContainers, fuelConsumptionPerKM) {
    this.ID = id;
    this.fuel = fuel;
    this.currentPort = currentPort;
    this.totalWeightCapacity = totalWeightCapacity;
    this.maxContainers = maxContainers;
    this.fuelConsumptionPerKM = fuelConsumptionPerKM;
    this.containers = [];
  }

  sailTo(port) {
    const distance = this.currentPort.getDistance(port);
    const fuelNeeded = distance * this.fuelConsumptionPerKM;
    
    if (this.fuel >= fuelNeeded) {
      this.fuel -= fuelNeeded;
      this.currentPort = port;
      return true;
    }
    return false;
  }

  reFuel(newFuel) {
    this.fuel += newFuel;
  }

  load(container) {
    if (this.containers.length < this.maxContainers && this.totalWeightCapacity >= container.weight) {
      this.containers.push(container);
      return true;
    }
    return false;
  }

  unload(container) {
    const index = this.containers.findIndex(c => c.equals(container));
    if (index !== -1) {
      this.containers.splice(index, 1);
      return true;
    }
    return false;
  }

  getCurrentContainers() {
    return this.containers.sort((a, b) => a.ID - b.ID);
  }
}

module.exports = Ship;
