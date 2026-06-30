const ProductModel = require('../models/productModel');

//Get Product API -api/v1/product
exports.getProducts = async (req,res,next) => {
    //ternary operator=> condition ? doThisIfTrue : doThisIfFalse
    const query= req.query.keyword?{ name : {
        $regex: req.query.keyword,          //$regex finds partial matches anywhere in the text — not exact match!
        $options: 'i'    //for omitting case-sensitive =>  ignore UPPERCASE/lowercase 
    }}: {}
   const products =await ProductModel.find(query); 

    res.json({
        success: true,
        products
    })
}

//Get SingleProduct API -api/v1/product/:id

exports.getSingleProduct = async(req,res,next) => {

    try {
        const product =await ProductModel.findById(req.params.id); 
        res.json({
           success: true,
           product
        })
    } catch (error) {
        res.json({
           success: false,
           message: error.message
        })
    }
}