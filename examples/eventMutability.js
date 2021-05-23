const Event = require('./EventPrototype');
const Math = require('./Math');

// Immutable metric events
const sec = 1000; // one second
const tempo = sec; // 60bpm
const quarter = Math.div(tempo, 4);
const eighth =  Math.div(tempo, 8) || Math.div(quarter, 2);
console.log('IMMUTABLE', eighth); // 125

// Mutable metric events
let event = new Event(1000); // one e per second
event.div(4); // eq to immutable quarter
event.div(2); // eq to immutable eighth
console.log('MUTABLE', event.value); // 125
