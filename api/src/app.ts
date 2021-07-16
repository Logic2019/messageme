import express from 'express';
 
const app = express();
const port = 4040;
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const covRoute = require("./routes/Converstion")
const MessageRoute = require("./routes/Message")



dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, })
.then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversation", covRoute);
app.use("/api/message", MessageRoute);


 
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
