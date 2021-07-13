const mongoo = require("mongoose");
const MessageSchema = new mongoo.Schema({
    conversationId: {
        type: String,
    },
    sender: {
        type: String,
    },
    text: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoo.model("Message", MessageSchema);
//# sourceMappingURL=Message.js.map