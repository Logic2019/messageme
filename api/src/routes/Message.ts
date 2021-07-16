const routee = require("express").Router();
const Message = require("../module/Message");



//add messages
routee.post("/", async (req, res) => {
    const newMessage = new Message(req.body);
  
    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get messages
routee.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = routee;
