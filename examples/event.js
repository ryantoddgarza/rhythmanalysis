function Event(n) {
  this.value = n;

  this.m = function multiply(y) {
    return this.value * y;
  }

  this.d = function divide(y) {
    return this.value / y;
  }

  this.a = function add(y) {
    return this.value + y;
  };

  this.s = function subtract(y) {
    return this.value - y;
  };
}

// Immutable metric events
const sec = new Event(1000); // one second
const tempo = new Event(sec.d(1)); // 60bpm
const quarter = new Event(tempo.d(4));
const eighth = new Event(tempo.d(8)) || new Event(quarter.d(2));
console.log('Traditional', eighth.value);

// Mutable metric events
let e = new Event(1000); // one e/second
e = new Event(e.d(4)); // eq to immutable quarter
e = new Event(e.d(2)); // eq to immutable eighth
console.log('Dimensional', e.value);
