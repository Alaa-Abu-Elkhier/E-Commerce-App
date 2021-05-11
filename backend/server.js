import express from "express";
import data from "./data.js";


const app=express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/api/products',(req,res)=>{
    res.send(data.products)
}
);

app.get('/',(req,res)=>{
    res.send('server is Ready')
}
);

const port=process.env.PORT || 4000 //take the port num from env if not ecxist run it on 5000
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})