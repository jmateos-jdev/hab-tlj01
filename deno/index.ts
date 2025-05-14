import {routeador} from "./router.ts";

Deno.serve({port: 3000, hostname: "127.0.0.1"}, (req) => {

    const response = routeador(req);

    return new Response(JSON.stringify(response),{
        status: response?.status || 404,
        headers: {
            "Content-Type": "application/json",
        },
    });

})

console.log("Server is running on port 3000");
