function Event(n) {
  this.value = n;

  this.mul = function multiply(y) {
    this.value *= y;
  };

  this.div = function divide(y) {
    this.value /= y;
  };

  this.add = function add(y) {
    this.value += y;
  };

  this.sub = function subtract(y) {
    this.value -= y;
  };
}

Event.prototype = Object.create(null, {});

module.exports = Event;
