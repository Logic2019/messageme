var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const routee = require("express").Router();
const Message = require("../module/Message");
//add messages
routee.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newMessage = new Message(req.body);
    try {
        const savedMessage = yield newMessage.save();
        res.status(200).json(savedMessage);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//get messages
routee.get("/:conversationId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const messages = yield Message.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).json(messages);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = routee;
//# sourceMappingURL=Message.js.map