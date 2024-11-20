class Item {
  constructor(ID, weight, count, containerID) {
      this.ID = ID;
      this.weight = weight;
      this.count = count;
      this.containerID = containerID;
  }

  getTotalWeight() {
      return this.weight * this.count;
  }
}

module.exports = Item;
