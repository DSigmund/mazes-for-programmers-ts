export declare class Cell {
    row: number;
    column: number;
    north?: Cell;
    east?: Cell;
    south?: Cell;
    west?: Cell;
    links: Cell[];
    constructor(row: number, column: number);
    link(cell: Cell, bidirectional?: boolean): void;
    unlink(cell: Cell, bidirectional?: boolean): void;
    isLinked(cell: Cell): boolean;
    neighbors(): Cell[];
}
export default Cell;
