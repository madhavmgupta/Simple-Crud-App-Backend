const express = require('express')
const mongoose = require('mongoose');
const Product=require('./models/product.model.js');
const productRoute=require('./routes/product.rout.js');  
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use("/api/products",productRoute);

app.get('/',  (req, res)=> {
    res.send("Hello from the API server updated")
  });


  





  mongoose.connect("mongodb+srv://madhavmgupta:madhav123@backenddb.mrwrr.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000,()=>{
      console.log('Server is running onport 3000');
  });
  
  })
  .catch(() => {
    console.log("Connection failed!");
  })

  // mongodb+srv://madhavmgupta:Radha@123@backenddb.mrwrr.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB