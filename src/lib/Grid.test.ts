// no unlinked cells. always a path north in a row

import Grid from "./Grid";

export class GridTest {
  public static test(grid: Grid): boolean {
    let cells = grid.flatten();
    if (cells.some((c) => c.links.length < 1)) return false;
    for (const row of grid.grid) {
      let pathNorth = false;
      for (const cell of row) {
        if (cell.north && cell.isLinked(cell.north)) {
          pathNorth = true;
        }
        if(!cell.north) { // northern border
          pathNorth = true;
          break;
        }
      }
      if (!pathNorth) return false;
    }
    return true;
  }
}
export default GridTest