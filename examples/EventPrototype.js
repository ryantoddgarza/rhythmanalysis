function Event(n) {
  this.value = n;

  this.m = function multiply(y) {
    this.value *= y;
  };

  this.d = function divide(y) {
    this.value /= y;
  };

  this.a = function add(y) {
    this.value += y;
  };

  this.s = function subtract(y) {
    this.value -= y;
  };

  return this;
}

Event.prototype = Object.create(null, {});

module.exports = Event;
