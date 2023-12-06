const R2Event = require('../models/R2Event');

const createR2Event = async (req, res) => {
    const newR2Event = req.body.newR2Event;
    newR2Event.startDate = req.body.startDate;
    newR2Event.endDate = req.body.endDate;

    try {
        await R2Event.create(newR2Event)
        res.status(201).json({ 'success': 'Event Created' })
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    createR2Event,
}