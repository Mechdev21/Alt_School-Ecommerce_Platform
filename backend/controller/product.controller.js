const catInstance = require("../services/cat.service");
const productInstance = require("../services/product.service");
const formidable = require('formidable');
const uploadFile = require('../utilities/upload.utility');

const createProduct = async (req, res, next) => {
    const form = formidable({ maxFieldsSize: 400 * 1024 * 1024 }); // Set max file size to 400MB

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return next(err); // Handle errors during form parsing
        }

        try {
            // Upload the image using the upload utility and Cloudinary
            const imageUrl = await uploadFile(files['image-url'].filepath, "intro");

            // Check if category exists
            const category = await catInstance.findOneCat({ _id: fields.categoryId });
            if (!category) {
                return res.status(404).json('Category not found');
            }

            // Create product details object
            const details = {
                categoryId: category._id,
                name: fields.name,
                imageUrl, // Save the Cloudinary image URL
            };

            // Create product in the database
            const product = await productInstance.createProduct(details);
            res.json(product);

        } catch (error) {
            return next(error); // Handle any other errors
        }
    });
};

// Other CRUD operations as in your original code
const getOneProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await productInstance.getOneProduct({ _id: productId });
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productInstance.getAllProducts();
        res.json(products);
    } catch (error) {
        throw new Error(error);
    }
};

const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await productInstance.deleteProduct({ _id: productId });
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
};

const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { categoryId, name } = req.body;
    try {
        const product = await productInstance.updateProduct({ _id: productId }, { categoryId, name });
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    getOneProduct,
    updateProduct,
};
