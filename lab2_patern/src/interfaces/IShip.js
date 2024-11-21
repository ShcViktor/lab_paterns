class IShip {
  sailTo(port) {
      throw new Error("Method 'sailTo()' must be implemented.");
  }

  reFuel(fuelAmount) {
      throw new Error("Method 'reFuel()' must be implemented.");
  }

  load(container) {
      throw new Error("Method 'load()' must be implemented.");
  }

  unLoad(container) {
      throw new Error("Method 'unLoad()' must be implemented.");
  }
}

module.exports = IShip;
