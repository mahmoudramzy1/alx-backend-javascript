import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, color, range);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
