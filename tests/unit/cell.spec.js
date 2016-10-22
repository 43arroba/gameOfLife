const assert = require('chai').assert;
const Cell  = require('../../src/cell');
const CORNERS = 6;

suite('Unit Test - Cell', function () {
    let cell;
    before(() => {
        cell = new Cell();
    });

    suite('Rules cell', () => {
        test('Create a new cell is live', function () {
            assert.equal(cell.isLive(), false);
        });

        test('Is cell have two alvie neighbour is life', function () {
            let neighbours = [true, true, false, false];
            cell.check(neighbours);
            assert.equal(cell.isLive(), true);
        });

        test('Is cell have one alive neighbour is dead',function () {
            let neighbours = [true, false, false, false];
            cell.check(neighbours);
            assert.equal(cell.isLive(), false);
        });
    });
});

