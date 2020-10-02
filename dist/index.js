"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./lib/Grid");
const BinaryTree_1 = require("./lib/BinaryTree");
const Sidewinder_1 = require("./lib/Sidewinder");
const Grid_test_1 = require("./lib/Grid.test");
let myArgs = process.argv.slice(2);
let size = parseInt(myArgs[0]);
let algo = myArgs[1];
let grid = new Grid_1.default(size, size);
console.log('Cells: ' + grid.size());
let algorithm;
let validMaze;
switch (algo) {
    case "binarytree":
        algorithm = new BinaryTree_1.default(grid);
        print(algorithm);
        break;
    case "sidewinder":
        algorithm = new Sidewinder_1.default(grid);
        print(algorithm);
        break;
    default:
        console.error('Algorithm ' + algo + " not known yet ...");
        process.exit();
}
function print(algorithm) {
    console.log(algorithm.grid.toString());
    validMaze = Grid_test_1.default.test(algorithm.grid);
    if (validMaze) {
        console.log('The Maze is valid (every row has a parth north, no cell has no links)');
    }
    else {
        console.error('The Maze is invalid (a row may have no parth north or any cell has no link)');
    }
}
//# sourceMappingURL=index.js.map