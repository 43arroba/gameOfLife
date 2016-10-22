const assert = require('chai').assert;
const Cell = require('../../src/cell');
const CORNERS = 8;

suite('Unit Test - Cell', function () {
    let cell;

    beforeEach(() => {
        cell = new Cell();
    });

    suite('should live cell', () => {
        test('the next generation state', function () {
            let neightboardsTwoLive = [true, true, false, false, false, false, false, false];
            let neightboardsThreeLive = [true, true, true, false, false, false, false, false];

            assertAliveCell(cell.check(neightboardsTwoLive).isAlive());
            assertAliveCell(cell.check(neightboardsThreeLive).isAlive());
        });

        function assertAliveCell(aliveCell) {
            assert.equal(aliveCell, true);
        }
    });

    suite('should dead cell', () => {
        test('Creating a new cell with under-population', function () {
            let neightboards = [true, false, false, false, false, false];
            assertDeadCell(cell.check(neightboards).isAlive());
        });

        test('Creating a new cell with over-population', function () {
            let neightboards = [true, true, true, true, false, false];
            assertDeadCell(cell.check(neightboards).isAlive());
        });

        function assertDeadCell(aliveCell) {
            assert.equal(aliveCell, false);
        }
    });

});

