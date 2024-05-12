const Landlord = require('../models/Landlord');



//get all
const getLandlords = async (req, res) => {
    try {
        const landlords = await Landlord.find();
        res.json(landlords);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const getLandlord = async (req, res) => {
    try {
        const {id} = req.params;
        const landlords = await Landlord.findById(id);
        res.status(200).json(landlords);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//create
const createLandlord = async (req, res) => {
    try {
        const landlord = await Landlord.create(req.body);
        res.status(201).json(landlord);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//update
const updateLandlord = async (req, res) => {
    try {
        const {id} = req.params;
        const landlord = await Landlord.findByIdAndUpdate(id, req.body);

        if (!landlord) {
            res.status(404).json({message: 'Landlord not found'});
        }
        const updatedLandlord = await Landlord.findById(id);
        res.status(200).json(updatedLandlord);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
}


//delete
const deleteLandlord = async (req, res) => {
    try {
        const landlord = await Landlord.findByIdAndDelete(req.params.id);
        if (!landlord) {
            res.status(404).json({message: 'Landlord not found'});
        } else {
            res.json({message: 'Landlord deleted'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};



module.exports = {
    getLandlords,
    getLandlord,
    createLandlord,
    updateLandlord,
    deleteLandlord
};