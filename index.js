// function receivesAFunction(callback) {
//   return callback();
// }
// function returnsANamedFunction() {
//   return returnsANamedFunction;
// }

// function returnsAnAnonymousFunction() {
//   return function () {};
// }

// function receivesAFunction(callback) {
//   callback();
// }

// function returnsANamedFunction() {
//   return returnsANamedFunction;
// }

// const returnsAnAnonymousFunction = function () {
//   return function () {};
// };

// function receivesAFunction(callback) {
//   console.log(receivesAFunction);
// }

const receivesAFunction = (callback) => {
  callback();
};

function returnsANamedFunction() {
  return returnsANamedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
