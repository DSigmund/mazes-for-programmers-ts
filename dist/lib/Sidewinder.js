"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sidewinder {
    constructor(grid) {
        this.grid = grid;
        for (const row of this.grid.grid) {
            let run = [];
            for (const cell of row) {
                const goEast = Math.round(Math.random()) === 1;
                if (goEast) {
                    if (cell.east) {
                        cell.link(cell.east);
                        run.push(cell);
                    }
                    else {
                        if (run.length > 0) {
                            run.push(cell);
                            let rndCell = run[Math.floor(Math.random() * run.length)];
                            if (rndCell.north)
                                rndCell.link(rndCell.north);
                            run = [];
                        }
                        else {
                            if (cell.north) {
                                cell.link(cell.north);
                            }
                            // rightBorder, do nothing
                        }
                    }
                }
                else { //goNorth
                    if (!cell.north && cell.east) {
                        cell.link(cell.east);
                    }
                    else {
                        run.push(cell);
                        let rndCell = run[Math.floor(Math.random() * run.length)];
                        if (rndCell.north)
                            rndCell.link(rndCell.north);
                        run = [];
                    }
                }
            }
        }
    }
}
exports.Sidewinder = Sidewinder;
exports.default = Sidewinder;
//# sourceMappingURL=Sidewinder.js.map