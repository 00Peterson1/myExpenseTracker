const http = require("node:http");
const port = 4000
const server = http.createServer((req:any,res:any) =>
{
    res.writeHead(200, {
        "content-length": 300,
        "content-type": "text/html"
    })

    res.write("<h1>My name is Peterson Mwaura, a Backend Engineer...yaaahh👌😁</h1>");
    res.end();
});

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})