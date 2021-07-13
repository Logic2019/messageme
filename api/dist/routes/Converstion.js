var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const rout = require("express").Router();
const Conversation = require("../module/Converstion");
//get new chat
rout.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const savedConversation = yield newConversation.save();
        res.status(200).json(savedConversation);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//get chat of a user
rout.get("/:userId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const conversation = yield Conversation.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//get chat includes two userId
rout.get("/find/:firstUserId/:secondUserId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const conversation = yield Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = rout;
//# sourceMappingURL=Converstion.js.map