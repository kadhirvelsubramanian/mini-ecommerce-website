const { ObjectId } = require("mongodb");
const productCollection = require('../models/productModel')
const { client } = require('../config/connectDatabase');

//Get Product API - /api/v1/products

exports.getProduct = async (req, res) => {
    const keyword = req.query.keyword;
    const query = keyword ? { name: { $regex: keyword, $options: "i" } } : {};

    const products = await productCollection.find(query).toArray();

    res.json({
        success: true,
        products,
    });
};

// exports.getProduct = async (req, res, next) => {
//     const query = req.query.keyword ? {
//         name: {
//             $regex: req.query.keyword,
//             $options: 'i'
//         }
//     } : {}

//     const products = roduct = await productModel.find(query);
//     res.json({
//         success: true,
//         products
//     })
// }

//Get SIngle Product API - /api/v1/products/:id

exports.getSingleProduct = async (req, res) => {
    const productId = new ObjectId(req.params.id);

    const product = await productCollection.findOne({ _id: productId });

    res.json({
        success: true,
        product,
    });
};

// exports.getSingleProduct = async (req, res, next) => {\
//     try {
//         const product = await productModel.findById(req.params.id);
//         res.json({
//             success: true,
//             product
//         })
//     } catch (error) {
//         res.status(404).json({
//             success: false,
//             message: error.message
//         })
//     }

// }