const express = require('express');
const mongoose = require('mongoose');


const Contract = require('./models/Contract');
const Landlord = require('./models/Landlord');
const Tenant = require('./models/Tenant');
const contractRoute = require('./routes/ContractRoute');
const landlordRoute = require('./routes/LandlordRoute');
const tenantRoute = require('./routes/TenantRoute');


const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/api/contracts', contractRoute);
app.use('/api/landlords', landlordRoute);
app.use('/api/tenants', tenantRoute);


app.get('/', (req, res) => {
    res.send('Hello World new update!');
});

mongoose.connect("mongodb+srv://austin06binoy:12345@cluster0.47mjkye.mongodb.net/SummerExam?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to database');
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
})
.catch(()=>{
    console.log('Connection failed');
})






/*
app.get('/api/tenants', async (req, res) => {
    try{
       const tenants = await Tenant.find({});
       res.json(tenants);
    }catch (error){
        res.status(500).json({message: error.message});
    }
});
app.get('/api/tenants/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const tenants = await Tenant.findById(id);
        res.status(200).json(tenants);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


app.post('/api/tenants', async (req, res) => {
    try{
      const tenant =  await Tenant.create(req.body);
      res.status(201).json(tenant);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

app.put('/api/tenants/:id', async (req, res) => {
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
});


app.delete('/api/tenants/:id', async (req, res) => {
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
});
*/