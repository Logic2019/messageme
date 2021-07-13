var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const route = require('express').Router();
const User = require('../module/User');
const bcrypt = require('bcrypt');
//REGISTER
route.post("/register", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = yield bcrypt.hash(req.body.password, salt);
        const newUser = yield new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const user = yield newUser.save();
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
}));
//User Login
route.post("/login", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");
        const validPassword = yield bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
}));
module.exports = route;
//# sourceMappingURL=auth.js.map