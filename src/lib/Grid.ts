import { Cell } from "./Cell";

export class Grid {
  public rows: number;
  public columns: number;
  
  public grid: Cell[][];

  constructor (rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.grid = this.prepareGrid();
    this.configureCells();
  }

  private prepareGrid (): Cell[][] {
    let cells:Cell[][] = new Array();
    for (let indexRows = 0; indexRows < this.rows; indexRows++) {
      cells[indexRows] = new Array();
      for (let indexColumns = 0; indexColumns < this.columns; indexColumns++) {
        cells[indexRows][indexColumns] = new Cell(indexRows, indexColumns);
      }
    }
    return cells;
  }

  private configureCells () {
    for (let indexRows = 0; indexRows < this.grid.length; indexRows++) {
      for (let indexColumns = 0; indexColumns < this.grid[indexRows].length; indexColumns++) {
        const cell = this.grid[indexRows][indexColumns];
        try {
          cell.north = this.grid[indexRows - 1][indexColumns];
        } catch (error) {
          cell.north = undefined;
        }
        
        try {
          cell.east = this.grid[indexRows][indexColumns + 1];
        } catch (error) {
          cell.east = undefined;
        }
        
        try {
          cell.south = this.grid[indexRows + 1][indexColumns];
        } catch (error) {
          cell.south = undefined;
        }
        
        try {
          cell.west = this.grid[indexRows][indexColumns - 1];
        } catch (error) {
          cell.west = undefined;
        }
        

        this.grid[indexRows][indexColumns] = cell;
      }
    }
  }

  public randomCell(): Cell {
    const randomRow = Math.floor(Math.random() * (this.rows - 1));
    const randomColumn = Math.floor(Math.random() * (this.columns - 1));
    return this.grid[randomRow][randomColumn];
  }

  public size(): number { return this.rows * this.columns;}

  public toString(): string {
    let output = '+';
    output += '---+'.repeat(this.columns) + '\n';
    for (const row of this.grid) {
      output += '|';
      for (const cell of row) {
        output += '   ';
        output += (cell.isLinked(cell.east)) ? ' ' : '|';
      }
      output += '\n';
      output += '+';
      for (const cell of row) {
        output += (cell.isLinked(cell.south)) ? '   +' : '---+';
      }
      output += '\n';
    }
    return output;
  }

  public flatten(): Cell[] {
    let cells = [];
    for (const row of this.grid) {
      for (const cell of row) {
        cells.push(cell);
      }
    }
    return cells;
  }

}
export default Grid;