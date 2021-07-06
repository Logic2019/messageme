"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("./product");
const app = express_1.default();
const port = 3001;
function getProduct() {
    let p = new product_1.Product();
    p.Id = "1";
    p.Price = 100;
    p.Title = "Cricket Bat";
    p.inStock = true;
    return p;
}
app.get('/products', (req, res) => {
    res.send(getProduct());
});
app.listen(port), (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
};
//# sourceMappingURL=app.js.map