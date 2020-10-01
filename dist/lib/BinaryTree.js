"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryTree {
    constructor(grid) {
        this.grid = grid;
        for (const column of this.grid.grid) {
            for (const cell of column) {
                let north = cell.north;
                let east = cell.east;
                const goNorth = Math.round(Math.random()) === 1;
                if (goNorth) {
                    if (north)
                        cell.link(north);
                    else if (east)
                        cell.link(east);
                }
                else {
                    if (east)
                        cell.link(east);
                    else if (north)
                        cell.link(north);
                }
            }
        }
    }
}
exports.BinaryTree = BinaryTree;
exports.default = BinaryTree;
//# sourceMappingURL=BinaryTree.js.map