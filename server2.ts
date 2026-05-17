// HTTP module is a node module solution for creating http servers and clients.
// It is a built-in module that provides an easy way to create a web server and handle HTTP requests and responses.
const http = require("node:http");
console.log(http)

const port = 4000;

http.createServer((req:any, res:any) =>{
    res.writeHead(200, {
        "content-length": 300,
        "content-type": "text/html"
    }),
    res.write("<h1>My name is Peterson Mwaura, a Backend Engineer...yaaahh👌😁</h1>");
    res.end();
})

http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});