import express from 'express';
import { router } from './routes/user';






const { MongoClient } = require("mongodb");
 
                                                                                                                                     
const url = "mongodb+srv://logicdb:logicDB1@messagingapp.ioymf.mongodb.net/messagingappdb?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to mongoDB server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
 

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.json)
app.use(express.urlencoded({extended: false}))
app.use('/users',router);







 
app.listen(port), (err:any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
};