class Container {
  constructor(ID, weight) {
      if (new.target === Container) {
          throw new Error("Cannot instantiate abstract class Container");
      }
      this.ID = ID;
      this.weight = weight;
  }

  consumption() {
      throw new Error("Method 'consumption()' must be implemented.");
  }
}

module.exports = Container;
