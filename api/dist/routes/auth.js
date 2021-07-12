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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const router = require("express").Router();
exports.userRouter = router;
const User = require("../module/User");
const bcrypt = require("bcrypt");
//REGISTER
router.get("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //create new user
    const user = yield new User({
        username: "joe",
        email: "joe@gmail.com",
        password: "112233"
    });
    //save user and respond
    yield user.save();
    res.send("ok");
    //LOGIN
    router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ email: req.body.email });
            !user && res.status(404).json("user not found");
            const validPassword = yield bcrypt.compare(req.body.password, user.password);
            !validPassword && res.status(400).json("wrong password");
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }));
}));
//# sourceMappingURL=auth.js.map