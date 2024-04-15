const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Начало обработки запроса");
    res.writeHead(200, { 
        "Content-Type": "text/plain; charset=UTF-8" 
    });
    res.statusMessage = "Hello, world!\n";
    res.write("Hello, world!\n");
    res.write("Hello, world!\n");
    res.end();
});
server.listen(3000, "127.0.0.1", () => {
    const { address, port } = server.address();
    console.log(`Сервер запущен ${address}:${port}`);
});