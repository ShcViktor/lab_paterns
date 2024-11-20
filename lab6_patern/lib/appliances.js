class Appliance {
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }

  stop() {
    throw new Error("Method 'stop()' must be implemented.");
  }
}

class AC extends Appliance {
  start() {
    console.log("Air Conditioner is now ON.");
  }

  stop() {
    console.log("Air Conditioner is now OFF.");
  }
}

class Fan extends Appliance {
  start() {
    console.log("Fan is now ON.");
  }

  stop() {
    console.log("Fan is now OFF.");
  }
}

class TV extends Appliance {
  start() {
    console.log("TV is now ON.");
  }

  stop() {
    console.log("TV is now OFF.");
  }
}

class GateOpener extends Appliance {
  start() {
    console.log("Gate is opening.");
  }

  stop() {
    console.log("Gate is closing.");
  }
}

module.exports = { AC, Fan, TV, GateOpener };
