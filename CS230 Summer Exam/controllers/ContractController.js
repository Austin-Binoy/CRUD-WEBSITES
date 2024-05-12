const Contract = require('../models/Contract');



//get all
const getContracts = async (req, res) => {
    try {
        const contracts = await Contract.find();
        res.json(contracts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const getContract = async (req, res) => {
    try {
        const {id} = req.params;
        const contracts = await Contract.findById(id);
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//create
const createContract = async (req, res) => {
    try {
        const contract = await Contract.create(req.body);
        res.status(201).json(contract);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//update
const updateContract = async (req, res) => {
    try {
        const {id} = req.params;
        const contract = await Contract.findByIdAndUpdate(id, req.body);

        if (!contract) {
            res.status(404).json({message: 'Contract not found'});
        }
        const updatedContract = await Contract.findById(id);
        res.status(200).json(updatedContract);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
}


//delete
const deleteContract = async (req, res) => {
    try {
        const contract = await Contract.findByIdAndDelete(req.params.id);
        if (!contract) {
            res.status(404).json({message: 'Contract not found'});
        } else {
            res.json({message: 'Contract deleted'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};



module.exports = {
    getContracts,
    getContract,
    createContract,
    updateContract,
    deleteContract
};