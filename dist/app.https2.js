"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http2_1 = __importDefault(require("http2"));
const fs_1 = __importDefault(require("fs"));
const server = http2_1.default.createSecureServer({
    key: fs_1.default.readFileSync('./keys/server.key'),
    cert: fs_1.default.readFileSync('./keys/server.crt'),
    requestCert: true,
    rejectUnauthorized: false
}, (request, response) => {
    var _a, _b;
    console.log(request.url);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello World</h1>");
    response.end("");
    const data = { name: 'John Doe', age: 30, city: 'New York' };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(data));
    if (request.url === '/') {
        const htmlFile = fs_1.default.readFileSync('./public/index.html', 'utf-8');
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(htmlFile);
        return;
    }
    if ((_a = request.url) === null || _a === void 0 ? void 0 : _a.endsWith('.js')) {
        console.log("URL js: ", request.url);
        response.writeHead(200, { "Content-Type": "application/javascript" });
    }
    else if ((_b = request.url) === null || _b === void 0 ? void 0 : _b.endsWith('.css')) {
        console.log("URL css: ", request.url);
        response.writeHead(200, { "Content-Type": "text/css" });
    }
    const responseContent = fs_1.default.readFileSync(`./public/${request.url}`, 'utf-8');
    response.end(responseContent);
});
server.listen(8080, () => {
    console.log("Server running on 8080");
});
