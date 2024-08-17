const { MongoClient } = require('mongodb');

async function findProblematicData() {
    const uri = "mongodb+srv://chinenyeonyema1:C042932o@cluster0.r32q0bo.mongodb.net/";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('cluster0.r32q0bo.mongodb.net/');
        const collection = database.collection('users');

        const query = { "password": { $regex: /[\n\t\r\b\f]/ } };
        const results = await collection.find(query).toArray();

        if (results.length > 0) {
            console.log("Problematic documents found:");
            console.log(results);
        } else {
            console.log("No problematic documents found.");
        }
    } finally {
        await client.close();
    }
}

findProblematicData().catch(console.error);
