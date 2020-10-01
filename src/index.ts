import Grid from "./lib/Grid";
import BinaryTree from "./lib/BinaryTree";

let grid = new Grid(2,2);

console.log('Cells: ' + grid.size());

let btree = new BinaryTree(grid);

console.log(btree.grid.grid[0][0])
console.log(btree.grid.grid[1][1])