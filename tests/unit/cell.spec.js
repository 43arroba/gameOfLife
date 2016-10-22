const assert = require('chai').assert;
const Cell  = require('../../src/cell');

suite('Unit Test - Cell', function () {
    test('Create a new cell is live', function () {
        let cell = new Cell();
        assert.equal(cell.isLive(), true);
    });
});