const { Division } = require('../models');

const getAllDivisions = async (req, res) => {
    const divisions = await Division.find();
    res.json(divisions)
}

module.exports = {
    getAllDivisions,
}