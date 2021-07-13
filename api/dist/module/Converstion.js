const mongo = require("mongoose");
const ConversationSchema = new mongo.Schema({
    members: {
        type: Array,
    },
}, { timestamps: true });
module.exports = mongo.model("Conversation", ConversationSchema);
//# sourceMappingURL=Converstion.js.map