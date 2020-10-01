import { Cell } from "./Cell";
export declare class Grid {
    rows: number;
    columns: number;
    grid: Cell[][];
    constructor(rows: number, columns: number);
    private prepareGrid;
    private configureCells;
    randomCell(): Cell;
    size(): number;
    toString(): string;
}
export default Grid;
