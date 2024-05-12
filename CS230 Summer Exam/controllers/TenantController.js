const Tenant = require('../models/Tenant');


//get all
const getTenants = async (req, res) => {
    try{
        const tenants = await Tenant.find({});
        res.json(tenants);
     }catch (error){
         res.status(500).json({message: error.message});
     }
}
const getTenant = async (req, res) => {
    try {
        const {id} = req.params;
        const tenants = await Tenant.findById(id);
        res.status(200).json(tenants);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//create
const createTenant = async (req, res) => {
    try{
        const tenant =  await Tenant.create(req.body);
        res.status(201).json(tenant);
      } catch(error){
          res.status(500).json({message: error.message});
      }
}


//update
const updateTenant = async (req, res) => {
    try {
        const {id} = req.params;
        const tenant = await Tenant.findByIdAndUpdate(id, req.body);

        if (!tenant) {
            res.status(404).json({message: 'Tenant not found'});
        }
        const updatedTenant = await Tenant.findById(id);
        res.status(200).json(updatedTenant);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
}


//delete
const deleteTenant = async (req, res) => {
    try {
        const {id} = req.params;
        const tenant = await Tenant.findByIdAndDelete(id);
        if (!tenant) {
            res.status(404).json({message: 'Tenant not found'});
        } else {
            res.json({message: 'Tenant deleted'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getTenants,
    getTenant,
    createTenant,
    updateTenant,
    deleteTenant
};