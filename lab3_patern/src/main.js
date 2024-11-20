const fs = require('fs');
const ItemFactory = require('./ItemFactory');
const ShipFactory = require('./ShipFactory');
const ShipBuilder = require('./ShipBuilder');

// Читання вхідного JSON
const inputData = JSON.parse(fs.readFileSync('input.json'));

// Створення вантажів за допомогою фабрики
const items = inputData.items.map(item => {
    return ItemFactory.createItem(item.type, item.ID, item.weight, item.count, item.containerID);
});

// Створення кораблів за допомогою фабрики
const ships = inputData.ships.map(shipData => {
    return ShipFactory.createShip(shipData.type, shipData.ID, shipData.fuel, shipData.currentPort, shipData.totalWeightCapacity, shipData.maxContainers, shipData.fuelConsumptionPerKM);
});

// Приклад використання ShipBuilder для створення корабля
const shipBuilder = new ShipBuilder();
const customShip = shipBuilder
    .setID(102)
    .setFuel(1500)
    .setCurrentPort(1)
    .setTotalWeightCapacity(25000)
    .setMaxContainers(30)
    .setFuelConsumptionPerKM(0.5)
    .build();

// Запис результату у JSON
fs.writeFileSync('output.json', JSON.stringify({ items, ships, customShip }, null, 2));

console.log('Project ran successfully!');
