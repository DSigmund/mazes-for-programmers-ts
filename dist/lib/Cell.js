"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cell {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.links = [];
    }
    link(cell, bidirectional = true) {
        this.links.push(cell);
        if (bidirectional) {
            cell.link(this, false);
        }
    }
    unlink(cell, bidirectional = true) {
        this.links = this.links.filter(function (el) { return el.row !== cell.row && el.column !== cell.column; });
        if (bidirectional) {
            cell.unlink(this, false);
        }
    }
    isLinked(cell) {
        return this.links.some(e => e.row === cell.row && e.column === cell.column);
    }
    neighbors() {
        let r = [];
        if (this.north)
            r.push(this.north);
        if (this.east)
            r.push(this.east);
        if (this.south)
            r.push(this.south);
        if (this.west)
            r.push(this.west);
        return r;
    }
}
exports.Cell = Cell;
exports.default = Cell;
//# sourceMappingURL=Cell.js.map