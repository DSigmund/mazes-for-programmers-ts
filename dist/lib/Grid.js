"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cell_1 = require("./Cell");
class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.grid = this.prepareGrid();
        this.configureCells();
    }
    prepareGrid() {
        let cells = new Array();
        for (let indexRows = 0; indexRows < this.rows; indexRows++) {
            cells[indexRows] = new Array();
            for (let indexColumns = 0; indexColumns < this.columns; indexColumns++) {
                cells[indexRows][indexColumns] = new Cell_1.Cell(indexRows, indexColumns);
            }
        }
        return cells;
    }
    configureCells() {
        for (let indexRows = 0; indexRows < this.grid.length; indexRows++) {
            for (let indexColumns = 0; indexColumns < this.grid[indexRows].length; indexColumns++) {
                const cell = this.grid[indexRows][indexColumns];
                try {
                    cell.north = this.grid[indexRows - 1][indexColumns];
                }
                catch (error) {
                    cell.north = undefined;
                }
                try {
                    cell.east = this.grid[indexRows][indexColumns + 1];
                }
                catch (error) {
                    cell.east = undefined;
                }
                try {
                    cell.south = this.grid[indexRows + 1][indexColumns];
                }
                catch (error) {
                    cell.south = undefined;
                }
                try {
                    cell.west = this.grid[indexRows][indexColumns - 1];
                }
                catch (error) {
                    cell.west = undefined;
                }
                this.grid[indexRows][indexColumns] = cell;
            }
        }
    }
    randomCell() {
        const randomRow = Math.floor(Math.random() * (this.rows - 1));
        const randomColumn = Math.floor(Math.random() * (this.columns - 1));
        return this.grid[randomRow][randomColumn];
    }
    size() { return this.rows * this.columns; }
}
exports.Grid = Grid;
exports.default = Grid;
//# sourceMappingURL=Grid.js.map