import Grid from "./lib/Grid";
import BinaryTree from "./lib/BinaryTree";
import Sidewinder from "./lib/Sidewinder";
let myArgs = process.argv.slice(2);

let size = parseInt(myArgs[0]);
let algo = myArgs[1];

let grid = new Grid(size, size);

console.log('Cells: ' + grid.size());


switch(algo) {
  case "binarytree":
    let btree = new BinaryTree(grid);
    console.log(btree.grid.toString());
    break;
  case "sidewinder":
    let sidewinder = new Sidewinder(grid);
    console.log(sidewinder.grid.toString());
    break;
  default: console.error('Algorithm ' + algo + " not known yet ...");
}

