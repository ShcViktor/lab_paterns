class Switch {
  turnOn(appliance) {
    appliance.start();
  }

  turnOff(appliance) {
    appliance.stop();
  }
}

class RemoteController {
  constructor(switchInstance) {
    this.switch = switchInstance;
  }

  turnOn(appliance) {
    this.switch.turnOn(appliance);
  }

  turnOff(appliance) {
    this.switch.turnOff(appliance);
  }
}

module.exports = { Switch, RemoteController };
