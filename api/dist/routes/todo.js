"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const User = require("../module/User");
const router = express_1.default.Router();
exports.todoRouter = router;
router.get('/api/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //create new user
    const user = yield new User({
        username: "joe",
        email: "joe@gmail.com",
        password: "112233"
    });
    //save user and respond
    yield user.save();
    res.send("ok");
}));
router.post('/api/todo', (req, res) => {
    return res.send('new todo created');
});
// function getProduct(){
//   let p = new Product();
//   p.Id = "1";
//   p.Price= 100;
//   p.Title="Cricket Bat";
//   p.inStock = true;
//   return p;   
// }
// app.get('/products', (req, res) => {
//   res.send(getProduct());
// });
//# sourceMappingURL=todo.js.map