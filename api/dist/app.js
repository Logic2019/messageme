var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://logic:<password>@messagingapp.ioymf.mongodb.net/messagingappdb?retryWrites=true&w=majority";
const client = new MongoClient(url);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected correctly to server");
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
//# sourceMappingURL=app.js.map