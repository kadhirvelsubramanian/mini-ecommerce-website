// const mongoose=require('mongoose')

// const orderSchema=new mongoose.Schema({
//     cartItems:Array,
//     amount:Number,
//     status:String,
//     createdAt:Date
// })

// const orderModel=mongoose.model('Order',orderSchema)

// module.exports=orderModel;

const { client } = require('../config/connectDatabase');

const miniEcommerce = client.db("mini-ecommerce")

const orderCollection = miniEcommerce.collection("order")

module.exports = orderCollection;