const express = require('express');
const router = express.Router();
const Landlord = require('../models/Landlord');
const {getLandlords, getLandlord, createLandlord, updateLandlord, deleteLandlord} = require('../controllers/LandlordController');


router.get('/', getLandlords);
router.post('/', createLandlord);
router.get('/:id', getLandlord);
router.put('/:id', updateLandlord);
router.delete('/:id', deleteLandlord);


module.exports = router;