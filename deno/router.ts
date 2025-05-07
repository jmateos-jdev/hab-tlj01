type Response = {
    message: string;
    status: number;
    data?: data;
}

type data = {
    name: string;
    age: number;
    email: string;
}

const routeador = (req: Request): Response => {

    const method = req.method;
    const url = new URL(req.url);

    if(method === "GET"){
        return get(url.pathname);
    }
    if(method === "POST"){
        return post(url.pathname);
    }
    return {
        message: "Method not allowed",
        status: 405,
    }
}

const get = (url: string): Response => {
    if(url === "/"){
        const response = {
            message: "Hello HAB",
            status: 200,
            data: {
                name: "HAB",
                age: 20,
                email: "hab@gmail.com"
            }
        }

        return response;
    }
    if(url === "/about"){
        const response = {
            message: "About page",
            status: 200,
        }

        return response;
    }
    if(url === "/error"){
        const response = {
            message: "Error page",
            status: 404,
        }

        return response;
    }

    return {
        message: "Not found",
        status: 404,
    }

}

const post = (url: string): Response => {
    if(url === "/"){
        const response = {
            message: "Data received",
            status: 200,
            data: {
                name: "HAB",
                age: 20,
                email: "hab@gmail.com"
            }
        }

        return response;
    }

    return {
        message: "Not found",
        status: 404,
    }
}

export {routeador};


