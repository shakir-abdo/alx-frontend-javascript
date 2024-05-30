export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.specs]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.specs];
    return new ModelCar();
  }
}
