var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Users = require("../module/User");
const bycrypt = require("bcrypt");
const router = require("express").Router();
//get a user
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId
            ? yield Users.findById(userId)
            : yield Users.findOne({ username: username });
        const _a = user._doc, { password, updatedAt } = _a, other = __rest(_a, ["password", "updatedAt"]);
        res.status(200).json(other);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//get online friends
router.get("/:userId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield User.findById(req.params.userId);
        const friends = yield Promise.all(user.followings.map((friendId) => {
            return User.findById(friendId);
        }));
        let friendList = [];
        res.status(200).json(friendList);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.put("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = yield bycrypt.genSalt(10);
                req.body.password = yield bycrypt.hash(req.body.password, salt);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = yield Users.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can update only your account!");
    }
}));
//delete user
router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            yield User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can delete only your account!");
    }
}));
module.exports = router;
//# sourceMappingURL=user.js.map