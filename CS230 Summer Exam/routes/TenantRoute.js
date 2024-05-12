const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');
const {getTenants, getTenant, createTenant, updateTenant, deleteTenant} = require('../controllers/TenantController');


router.get('/', getTenants);
router.post('/', createTenant);
router.get('/:id', getTenant);
router.put('/:id', updateTenant);
router.delete('/:id', deleteTenant);


module.exports = router;