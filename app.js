const http = require("http");

const app = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    if(req.method == 'GET' && req.url=='/'){
        res.end('<h1>Home</h1>');
    }else{
        res.end('Homepage 2');

    }
});

app.listen(3001, 'localhost', (err) => {
    if(err){
        console.log('Error');
    }else{
        console.log('Server connected');
    }
});