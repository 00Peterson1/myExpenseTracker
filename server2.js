
const http = require("node:http");

const server = http.createServer(
    (req,res) => {
        console.log(`Incoming Request: ${req.url} ${req.method}`);
        if(req.method === "POST" && req.url === "/") {
            let results = '';
            req.on(
                "data", (chunk) => results += chunk
            )
            req.on("end", () => {
            
                console.log(results)
            })
        } else {
            res.writeHead(200, {
                    "Content-Type": "text/json"

                });
                res.write("<h1>Hello, World!</h1>" );
                res.end();
        }
    }
)


server.listen(5000)

//console.log(http);