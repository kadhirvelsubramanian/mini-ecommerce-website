// const mongoose=require('mongoose');

// const connectDatabase=()=>{
//     mongoose.connect(process.env.DB_URL).then((con)=>{
//         console.log("MongoDB connected to  : "+con.connection.host);
//     })
// };
// module.exports=connectDatabase;

const { MongoClient } = require("mongodb");

const uri = process.env.DB_URL;

const client = new MongoClient(uri);

async function connectDatabase() {
    client.connect().then(() => {
        console.log("Connected to MongoDB");
        return;
    });
}
module.exports = { connectDatabase, client };

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// }
// );