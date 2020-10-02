import Grid from "./lib/Grid";
import iAlgorithm from "./lib/iAlogrithm";
import BinaryTree from "./lib/BinaryTree";
import Sidewinder from "./lib/Sidewinder";
import GridTest from "./lib/Grid.test";
let myArgs = process.argv.slice(2);

let size = parseInt(myArgs[0]);
let algo = myArgs[1];

let grid = new Grid(size, size);

console.log('Cells: ' + grid.size());

let algorithm: iAlgorithm;

let validMaze;
switch(algo) {
  case "binarytree":
    algorithm = new BinaryTree(grid);
    print(algorithm)
    break;
  case "sidewinder":
    algorithm = new Sidewinder(grid);
    print(algorithm)
    break;
  default: 
    console.error('Algorithm ' + algo + " not known yet ...");
    process.exit();
}

function print(algorithm: iAlgorithm) {
  console.log(algorithm.grid.toString());
  validMaze = GridTest.test(algorithm.grid);
  
  if(validMaze) {
    console.log('The Maze is valid (every row has a parth north, no cell has no links)')
  } else {
    console.error('The Maze is invalid (a row may have no parth north or any cell has no link)')
  }
}

