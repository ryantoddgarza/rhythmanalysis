const Event = require('./EventPrototype');

// Immutable metric events
const sec = new Event(1000); // one second
const tempo = new Event(sec.d(1)); // 60bpm
const quarter = new Event(tempo.d(4));
const eighth = new Event(tempo.d(8)) || new Event(quarter.d(2));
console.log('IMMUTABLE', eighth.value);

// Mutable metric events
let e = new Event(1000); // one e/second
e = new Event(e.d(4)); // eq to immutable quarter
e = new Event(e.d(2)); // eq to immutable eighth
console.log('MUTABLE', e.value);
