import http from "http";
import { routeador } from "./router.js";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    //crear texto largo de 5000 caracteres
    const textoLargo =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";

    const response = routeador(req.method, req.url);

    res.statusCode = response?.status || 404;
    res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
