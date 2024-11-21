const connectToMongo = require('./db')
connectToMongo();


const express = require('express');
const app = express();
const port = 8003;

const cors = require('cors')
const router =require('./Routes/router')

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})