"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./lib/Grid");
const BinaryTree_1 = require("./lib/BinaryTree");
let grid = new Grid_1.default(4, 4);
console.log('Cells: ' + grid.size());
let btree = new BinaryTree_1.default(grid);
console.log(btree.grid.toString());
//# sourceMappingURL=index.js.map