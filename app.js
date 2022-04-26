const express = require("express");
const app = express();

const routes = require("./routes");


//routes
app.use(routes);

//Error handling middleware
app.use((err, req, res, next) => {
    res.status(404).json({
        result: null,
        status: false,
        msg: 'Not found'
    });
});
app.listen(3001, 'localhost', (err) => {
    if(err){
        console.log('Error');
    }else{
        console.log('Server connected');
    }
});