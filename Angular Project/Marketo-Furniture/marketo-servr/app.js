require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const app = express();
connectMongoose();

async function connectMongoose(){
    await mongoose.connect("mongodb://localhost:27017/marketo-db");
    console.log("Mongodb connected");
}

app.use(express.json());
app.use(cors());
// create a server where browsers and API calls can connect 



// create a route that we can access in the browser 

app.get('/', function (req, res) {
    res.send("yep it's working");    
});

// another route 

app.get('/love', (req, res) => {
    res.send('Hi love');
});

app.get('/api/products', async(req, res)=>{
    const products = await productModel.find();
    res.status(200).json(
        {
            "success": true,
            "message": "Success",
            "data": products
        }
    );
});

app.listen(3000, function () {
    console.log("localhost:3000");
});

const productSchema = new mongoose.Schema(
    {
        productTitle: String,
        productPrice: Number,
        productImage: String,
        productCategory: String
    }
);

const productModel = mongoose.model("product", productSchema);

// createProduct();

async function createProduct(){
    const newProduct = new productModel({
        productTitle: "Bluetooth Speaker",
        productPrice: 4000.00,
        productImage: "https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/08/3-1-300x300.jpg",
        productCategory: "Hot Sell"
    });
    await newProduct.save();
    console.log("Product saved to db");
}


