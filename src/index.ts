import Grid from "./lib/Grid";
import BinaryTree from "./lib/BinaryTree";

let grid = new Grid(4,4);

console.log('Cells: ' + grid.size());

let btree = new BinaryTree(grid);

console.log(btree.grid.toString());