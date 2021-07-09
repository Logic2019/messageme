"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../module/User"));
const getAllUsers = (req, res, next) => {
    User_1.default.find()
        .exec()
        .then(results => {
        return res.status(200).json({
            users: results,
            count: results.length
        });
    })
        .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.default = { getAllUsers };
//# sourceMappingURL=User.js.map