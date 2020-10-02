"use strict";
// no unlinked cells. always a path north in a row
Object.defineProperty(exports, "__esModule", { value: true });
class GridTest {
    static test(grid) {
        let cells = grid.flatten();
        if (cells.some((c) => c.links.length < 1))
            return false;
        for (const row of grid.grid) {
            let pathNorth = false;
            for (const cell of row) {
                if (cell.north && cell.isLinked(cell.north)) {
                    pathNorth = true;
                }
                if (!cell.north) { // northern border
                    pathNorth = true;
                    break;
                }
            }
            if (!pathNorth)
                return false;
        }
        return true;
    }
}
exports.GridTest = GridTest;
exports.default = GridTest;
//# sourceMappingURL=Grid.test.js.map