const IPort = require('../interfaces/IPort');

class Port extends IPort {
    constructor(ID, latitude, longitude) {
        super();
        this.ID = ID;
        this.latitude = latitude;
        this.longitude = longitude;
        this.containers = [];
        this.history = new Set();
        this.current = new Set();
    }

    incomingShip(ship) {
        if (!this.history.has(ship.ID)) {
            this.history.add(ship.ID);
        }
        this.current.add(ship.ID);
    }

    outgoingShip(ship) {
        this.current.delete(ship.ID);
    }

    getDistance(otherPort) {
        const toRadians = (degree) => (degree * Math.PI) / 180;
        const R = 6371;
        const lat1 = toRadians(this.latitude);
        const lat2 = toRadians(otherPort.latitude);
        const deltaLat = toRadians(otherPort.latitude - this.latitude);
        const deltaLong = toRadians(otherPort.longitude - this.longitude);

        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLong / 2) * Math.sin(deltaLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }
}

module.exports = Port;
