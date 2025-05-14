const server = Bun.serve({async fetch(req){
    const url = new URL(req.url);
    const path = url.pathname;
    const method = req.method;


    if(method === "GET" && path === "/"){
        return new Response("Hola HAB desde Bun");
    }

    if(method === "GET" && path === "/about"){
        return new Response("About page desde Bun");
    }

    if(method === "POST" && path === "/create"){
        const body = await req.json();
        console.log(body);
        return new Response("Created", {status: 201});
    }

    return new Response("Not found", {status: 404});
},
port: 8000,
});

console.log(`Server is running on port http://${server.hostname}:${server.port}`);


