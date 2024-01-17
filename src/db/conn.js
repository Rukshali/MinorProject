// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://jiffi:<password>@jiffi.n97ojqx.mongodb.net/",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(() => {
//     console.log(`Connection Successful`);
// }).catch((e) => {
//     console.log(`Connection Error`);
// })




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jiffi:azxKv8qxGkofZloY@jiffi.n97ojqx.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect({
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        }).then(() => {
            console.log(`Connection Successful`);
        }).catch((e) => {
            console.log(`Connection Error`);
        });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


