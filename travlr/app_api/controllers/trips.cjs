const mongoose = require('mongoose');
const Trip = require('../models/travlr.cjs'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) //No filter, return all records
        .exec();
        
        // Uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Model.findOne({'code': req.params.tripCode}).exec();
        
        if (!trip) {
            return res.status(404).json({"message": "trip not found"});
        } else {
            return res.status(200).json(trip);
        }
    } catch (err) {
        return res.status(404).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};