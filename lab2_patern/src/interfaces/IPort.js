class IPort {
  incomingShip(ship) {
      throw new Error("Method 'incomingShip()' must be implemented.");
  }

  outgoingShip(ship) {
      throw new Error("Method 'outgoingShip()' must be implemented.");
  }
}

module.exports = IPort;
