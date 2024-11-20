class Container {
  constructor(id, weight) {
    this.ID = id;
    this.weight = weight;
  }

  consumption() {
    throw new Error('Method consumption() must be implemented');
  }

  equals(other) {
    return this.constructor === other.constructor && this.ID === other.ID && this.weight === other.weight;
  }
}

module.exports = Container;
