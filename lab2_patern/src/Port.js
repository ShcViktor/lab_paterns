class Port {
  constructor(id, latitude, longitude) {
    this.ID = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.containers = [];
    this.history = [];
    this.current = [];
  }

  incomingShip(ship) {
    if (!this.current.includes(ship)) {
      this.current.push(ship);
    }
  }

  outgoingShip(ship) {
    if (!this.history.includes(ship)) {
      this.history.push(ship);
      const index = this.current.indexOf(ship);
      if (index !== -1) {
        this.current.splice(index, 1);
      }
    }
  }

  getDistance(otherPort) {
    const latDiff = this.latitude - otherPort.latitude;
    const lonDiff = this.longitude - otherPort.longitude;
    return Math.sqrt(latDiff ** 2 + lonDiff ** 2);
  }
}

module.exports = Port;
