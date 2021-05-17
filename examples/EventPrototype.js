function Event(n) {
  this.value = n;

  this.m = function multiply(y) {
    return this.value * y;
  };

  this.d = function divide(y) {
    return this.value / y;
  };

  this.a = function add(y) {
    return this.value + y;
  };

  this.s = function subtract(y) {
    return this.value - y;
  };
}

Event.prototype = Object.create(null, {});

module.exports = Event;
