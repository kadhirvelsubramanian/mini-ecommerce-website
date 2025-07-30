const { client } = require('../config/connectDatabase');

const miniEcommerce = client.db("mini-ecommerce")

const productCollection = miniEcommerce.collection("product")

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     description: String,
//     ratings: Number,
//     images: [{
//         image: String
//     }],
//     category: String,
//     seller: String,
//     stock: Number,
//     numberOfReviews: Number,
//     createdAt: Date
// });

module.exports = productCollection;