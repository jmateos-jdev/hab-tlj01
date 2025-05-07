import {routeador} from "./router.ts";

Deno.serve((req) => {

    const response = routeador(req);

    return new Response(JSON.stringify(response),{
        status: response?.status || 404,
        headers: {
            "Content-Type": "application/json",
        },
    });

})

console.log("Server is running on port 8000");
