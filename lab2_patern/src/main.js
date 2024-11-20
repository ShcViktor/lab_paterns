const fs = require('fs');
const Port = require('./Port');
const Ship = require('./Ship');
const HeavyContainer = require('./HeavyContainer');
const LiquidContainer = require('./LiquidContainer');
const RefrigeratedContainer = require('./RefrigeratedContainer');

fs.readFile('./input.json', 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading input file:", err);
    return;
  }

  const inputData = JSON.parse(data);
  const ports = inputData.ports.map(portData => new Port(portData.ID, portData.latitude, portData.longitude));
  const ships = inputData.ships.map(shipData => new Ship(
    shipData.ID,
    shipData.fuel,
    ports.find(p => p.ID === shipData.currentPort),
    shipData.totalWeightCapacity,
    shipData.maxContainers,
    shipData.fuelConsumptionPerKM
  ));

  // Логіка обробки кораблів, контейнерів, портів...

  const outputData = {
    ports: ports,
    ships: ships
  };

  fs.writeFile('./output.json', JSON.stringify(outputData, null, 2), 'utf8', err => {
    if (err) {
      console.log("Error writing output file:", err);
    } else {
      console.log("Output saved to output.json");
    }
  });
});
