const productModel = require('../schema/product.schema')

class ProductService {
    async createProduct (_product) {
        const product = new productModel(_product);
        return await product.save();
    }

    async getAllProducts () {
        const products = await productModel.find().populate('categoryId');
        return products
    }
    async getProductById (id) {
        const product = await productModel.findById(id).populate('categoryId');
        return product
    }
    async updateProduct (id, _product) {
        const product = await productModel.findByIdAndUpdate(id, _product);
        return product;
    }
    async deleteProduct (id) {
        const product = await productModel.findByIdAndDelete(id);
        return product;
    }
}


const productInstance = new ProductService();
module.exports = productInstance;