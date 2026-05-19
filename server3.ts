const http = require("node:http");

const port = 6000;

http.createServer((req:any, res:any) =>{
   
if(req.method === "GET" && req.url === "/about"){
    res.writeHead(200, {
        "content-length": 300,
        "content-type": "text/html"
    }),
    res.write("<h1>My name is Peterson Mwaura, a Backend Engineer...yaaahh👌😁</h1>");
    res.end();
}
else if(req.method === "GET" && req.url === "/"){
    res.writeHead(200, {
        "content-length": 300,
        "content-type": "text/html"
    }),
    res.write("<h1>Contact me on my email: hello@petersonlabs.dev</h1>");
    res.end();
}

}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
})