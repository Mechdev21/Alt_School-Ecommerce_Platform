const catInstance = require("../services/cat.service");

const createCat =  async (req, res) => {
    try {
        const data = req.body;
        const createdCat = await catInstance.createCat(data);
        res.json(createdCat);
    } catch (error) {
        throw new Error(error)
    }
}

const getAllCats = async (req, res) => {
    try {
        const cats = await catInstance.findAllCats();
        res.json(cats)
    } catch (error) {
        throw new Error(error)
    }
}

const getOneCat = async (req, res) => {
    try {
        const { id } = req.params;
        const oneCat = await catInstance.findOneCat(id);
        res.json(oneCat)
    } catch (error) {
        throw new Error(error)
    }
}

const updateCat = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedCat = await catInstance.updateCat(id, data);
        res.json(updatedCat)
    } catch (error) {
        throw new Error(error)
    }
}

const deleteCat = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCat = await catInstance.deleteCat(id);
        res.json(deletedCat)
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { createCat, getAllCats, getOneCat, deleteCat, updateCat }