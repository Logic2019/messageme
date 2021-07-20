const mongoo = require("mongoose");

const MessageSchema = new mongoo.Schema(
  {
    conversationId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoo.model("Message", MessageSchema);
