"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://logicdb:logicDB1@messagingapp.ioymf.mongodb.net/messagingappdb?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected correctly to mongoDB server");
        }
        catch (err) {
            console.log(err.stack);
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.json);
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/users', user_1.router);
app.listen(port), (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
};
//# sourceMappingURL=app.js.map