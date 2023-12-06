const { EventType } = require('../models');

const getAllEventTypes = async (req, res) => {
    const eventTypes = await EventType.find();
    res.json(eventTypes)
}

module.exports = {
    getAllEventTypes,
}