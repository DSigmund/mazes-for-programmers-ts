"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./lib/Grid");
const BinaryTree_1 = require("./lib/BinaryTree");
let grid = new Grid_1.default(2, 2);
console.log('Cells: ' + grid.size());
let btree = new BinaryTree_1.default(grid);
console.log(btree.grid.grid[0][0]);
console.log(btree.grid.grid[1][1]);
//# sourceMappingURL=index.js.map