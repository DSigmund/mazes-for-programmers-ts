import Grid from "./Grid";
import iAlgorithm from "./iAlogrithm";

export class BinaryTree implements iAlgorithm {
  public grid: Grid;

  constructor(grid: Grid) {
    this.grid = grid;
    for (const column of this.grid.grid) {
      for (const cell of column) {
        let north = cell.north;
        let east = cell.east;

        const goNorth = Math.round(Math.random()) === 1;
        if (goNorth) {
          if (north) cell.link(north);
          else if (east) cell.link(east);
        } else {
          if (east) cell.link(east);
          else if (north) cell.link(north);
        }
      }
    }
  }
}
export default BinaryTree;