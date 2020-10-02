"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./lib/Grid");
const BinaryTree_1 = require("./lib/BinaryTree");
const Sidewinder_1 = require("./lib/Sidewinder");
let myArgs = process.argv.slice(2);
let size = parseInt(myArgs[0]);
let algo = myArgs[1];
let grid = new Grid_1.default(size, size);
console.log('Cells: ' + grid.size());
switch (algo) {
    case "binarytree":
        let btree = new BinaryTree_1.default(grid);
        console.log(btree.grid.toString());
        break;
    case "sidewinder":
        let sidewinder = new Sidewinder_1.default(grid);
        console.log(sidewinder.grid.toString());
        break;
    default: console.error('Algorithm ' + algo + " not known yet ...");
}
//# sourceMappingURL=index.js.map