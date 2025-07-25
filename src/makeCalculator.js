'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(x) {
      return this.result + x;
    },
    subtract(x) {
      return this.result - x;
    },
    multiply(x) {
      return this.result * x;
    },
    divide(x) {
      if (x === 0) {
        throw new Error('Division by zero is not allowed');
      }

      return this.result / x;
    },
    operate(operation, x) {
      this.result = operation.call(this, x);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
