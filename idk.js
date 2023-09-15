const fs = require('fs');

console.log('START');

setTimeout(() => console.log('setTimeout 1'), 0);

setImmediate(() => console.log('setImmediate'));

fs.readFile('./some-file.json', (_, data) => {
  console.log(`File data: ${data}`);
  setTimeout(() => console.log('readFile setTimeout'), 0);
  setImmediate(() => console.log('readFile setImmediate'));
  process.nextTick(() => console.log('readFile nextTick 1'));
  process.nextTick(() => console.log('readFile nextTick 2'));
  process.nextTick(() => console.log('readFile nextTick 3'));
});

Promise.resolve().then(() => {
  console.log('Promise');
  process.nextTick(() => console.log('Promise next tick'));
});

process.nextTick(() => console.log('Next Tick'));

setTimeout(() => console.log('setTiemout 2'), 0);

console.log('END');