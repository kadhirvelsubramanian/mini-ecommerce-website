const orderCollection = require('../models/orderModel');
const productCollection = require('../models/productModel');

//Create Order - /api/v1/order 
exports.createOrder = async (req, res, next) => {

    const cartItems = req.body;

    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = { cartItems, amount, status };

    const result = await orderCollection.insertOne(order);

    // Updating product stock
    const { ObjectId } = require("mongodb");

    for (const item of cartItems) {
        const productId = new ObjectId(item.product._id);
        const qty = item.qty;

        await productCollection.updateOne(
            { _id: productId },
            { $inc: { stock: -qty } }
        );
    }
    // cartItems.forEach(async (item) => {
    //     const product = await productModel.findById(item.product._id);
    //     product.stock = product.stock - item.qty;
    //     await product.save();
    // })


    res.json(
        {
            success: true,
            order
        }
    )
}