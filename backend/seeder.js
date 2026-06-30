const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const axios = require('axios');
const Product = require('./models/productModel');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('MongoDB connected for seeding');

        // 1. Wipe existing products so re-running this script doesn't duplicate data
        await Product.deleteMany();
        console.log('Old products removed');

        // 2. Fetch from DummyJSON — limit=0 returns all ~194 products
        const { data } = await axios.get('https://dummyjson.com/products?limit=0');

        // 3. Transform DummyJSON shape -> your schema shape
        const transformed = data.products.map((p) => ({
            name: p.title,
            price: p.price,
            description: p.description,
            ratings: p.rating,
            images: p.images.map((img) => ({ image: img })),
            category: p.category,
            seller: p.brand || 'Generic',
            stock: p.stock,
            numOfReviews: Math.floor(Math.random() * 50) + 1,
            createdAt: new Date()
        }));

        // 4. Insert into MongoDB
        await Product.insertMany(transformed);
        console.log(`${transformed.length} products inserted successfully`);

        process.exit();
    } catch (error) {
        console.error('Seeding failed:', error.message);
        process.exit(1);
    }
};

seedProducts();