const Event = require('./EventPrototype');

// Immutable metric events
const sec = 1000; // one second
const tempo = sec; // 60bpm
const quarter = tempo / 4;
const eighth = tempo / 8 || quarter / 2;
console.log('IMMUTABLE', eighth);

// Mutable metric events
let e = new Event(1000); // one e per second
e.d(4); // eq to immutable quarter
e.d(2); // eq to immutable eighth
console.log('MUTABLE', e.value);
