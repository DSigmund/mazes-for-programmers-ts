export class Cell {
  public row: number;
  public column: number;

  public north?: Cell;
  public east?: Cell;
  public south?: Cell;
  public west?: Cell;

  public links: Cell[];

  constructor (row: number, column: number) {
    this.row = row;
    this.column = column;
    this.links =[];
  }

  public link (cell: Cell, bidirectional: boolean = true): void {
    this.links.push(cell);
    if (bidirectional) {
      cell.link(this, false);
    }
  }

  public unlink (cell: Cell, bidirectional: boolean = true): void {
    this.links = this.links.filter(function(el) { return el.row !== cell.row && el.column !== cell.column; }); 
    if (bidirectional) {
      cell.unlink(this, false);
    }
  }

  public isLinked (cell?: Cell): boolean {
    if (cell) {
      return this.links.some(e => e.row === cell.row && e.column === cell.column);
    } else {
      return false;
    }
  }

  public neighbors (): Cell[] {
    let r = []
    if (this.north) r.push(this.north);
    if (this.east) r.push(this.east);
    if (this.south) r.push(this.south);
    if (this.west) r.push(this.west);
    return r;
  }
}
export default Cell;