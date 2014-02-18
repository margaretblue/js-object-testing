exports.Racecar = function(maxSpeed, driver) {
  function constructor() {};
  constructor.prototype.getMaxSpeed = function() {
    return maxSpeed;
  };
  constructor.prototype.getDriver = function() {
    return driver;
  };
  constructor.prototype.setDriver = function(newDriver) {
    driver = newDriver;
  };
  constructor.prototype.setMaxSpeed = function(newMaxSpeed) {
    maxSpeed = newMaxSpeed;
  }
  return new constructor();
}
// var car = new Racecar(200, "Buzz Lightyear");
// console.log(car.getDriver());
// car.setDriver("Margaret Slowbunny");
// console.log(car.getDriver());
// console.log(car.getMaxSpeed());
// car.setMaxSpeed(500);
// console.log(car.getMaxSpeed());
