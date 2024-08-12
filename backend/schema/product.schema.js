const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'categories',
        required: [true, 'Category ID is required'],
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
    },
    quantity: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative'],
        default: 0,
    },
    image: [
        {
            url: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                default: '',
            },
        },
    ],
    dateAdded: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
