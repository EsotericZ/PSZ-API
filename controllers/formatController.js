const { Format } = require('../models');

const getAllFormats = async (req, res) => {
    const formats = await Format.find();
    res.json(formats)
}

module.exports = {
    getAllFormats,
}