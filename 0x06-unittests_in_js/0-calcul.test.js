const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when adding 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return -4 when adding -1.4 and -2.5', function () {
    assert.strictEqual(calculateNumber(-1.4, -2.5), -4);
  });

  it('should return 0 when adding 0.1 and 0.3', function () {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return 3 when adding 1.6 and 1.2', function () {
    assert.strictEqual(calculateNumber(1.6, 1.2), 3);
  });

  it('should return 5 when adding 2.4 and 2.5', function () {
    assert.strictEqual(calculateNumber(2.4, 2.5), 5);
  });
});
