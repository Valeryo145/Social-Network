const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

/*const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://vaha1455:Newdbpass9955@<cluster>.mongodb.net/social-network?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected successfully to server');

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);*/


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);


app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));