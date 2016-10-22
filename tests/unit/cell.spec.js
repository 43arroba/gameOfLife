const assert = require('chai').assert;
const Cell  = require('../../src/cell');
const CORNERS = 6;

suite('Unit Test - Cell', function () {
    let cell;
    before(() => {
        cell = new Cell();
    });
    test('Create a new cell is live', function () {
        assert.equal(cell.isLive(), false);
    });
    test('Is cell have two Neighbour life', function () {
        let neighbours = [true, true, false, false];
        cell.check(neighbours);
        assert.equal(cell.isLive(), true);
    });
});