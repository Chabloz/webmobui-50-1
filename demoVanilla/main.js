let reactiveCode = null;
let ractiveFunctions = [];

const x = {
  _value: 2,
  get value() {
    if (reactiveCode) {
      ractiveFunctions.push(reactiveCode);
    }
    reactiveCode = null;
    return this._value;
  },
  set value(value) {
    this._value = value;
    for (let i = 0; i < ractiveFunctions.length; i++) {
      ractiveFunctions[i]();
    }
  }
};

let y = null;
const reactiveY = () => y = x.value * 2;
reactiveCode = reactiveY;
reactiveY();

let z = null;
const reactiveZ = () => z = x.value * 4;
reactiveCode = reactiveZ;
reactiveZ();

console.log(x.value, y, z);

x.value = 4;
console.log(x.value, y, z);

x.value = 8;
console.log(x.value, y, z);