import { MongoClient, ServerApiVersion } from 'mongodb';
const url = 'mongodb+srv://admin:admin@cluster0.s8ar2b8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// process.env.MONGODB_URI

const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connectToDatabase() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Successfully connected to Aura!");
    } catch(err) {
        console.log(err);
    } 
    return client.db('aura');
}

export { connectToDatabase };
