"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const covRoute = require("./routes/Converstion");
const MessageRoute = require("./routes/Message");
dotenv.config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
app.use(express_1.default.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversation", covRoute);
app.use("/api/message", MessageRoute);
app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
});
app.get('/product', (req, res) => {
    res.send("Welcome to the usepage");
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map