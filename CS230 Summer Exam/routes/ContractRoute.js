const express = require('express');
const router = express.Router();
const Contract = require('../models/Contract');
const {getContracts, getContract, createContract, updateContract, deleteContract} = require('../controllers/ContractController');


router.get('/', getContracts);
router.post('/', createContract);
router.get('/:id', getContract);
router.put('/:id', updateContract);
router.delete('/:id', deleteContract);


module.exports = router;