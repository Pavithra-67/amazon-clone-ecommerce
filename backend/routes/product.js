const express = require('express');
const router = express.Router();

const { getProducts,getSingleProduct } = require('../controllers/productController');


router.route('/products').get(getProducts); //route creation
router.route('/product/:id').get(getSingleProduct);

module.exports = router; //it is like export default router;
                         //module.exports = backend (Node.js) way
                        //export default = frontend (React) way