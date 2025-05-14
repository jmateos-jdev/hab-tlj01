const routeador = (method, url) => {
  if (method === "GET") {
    return get(url);
  }
  if (method === "POST") {
    return post(url);
  }
};

const get = (url) => {
  if (url === "/") {
    const response = {
      message: "Hello HAB",
      status: 200,
      data: {
        name: "HAB",
        age: 20,
        email: "hab@gmail.com",
      },
    };

    return response;
  }
  if (url === "/about") {
    const response = {
      message: "About page",
      status: 200,
    };

    return response;
  }
  if (url === "/error") {
    const response = {
      message: "Error page",
      status: 404,
    };

    return response;
  }
};

const post = (url) => {
  if (url === "/") {
    const response = {
      message: "Data received",
      status: 200,
      data: {
        name: "HAB",
        age: 20,
        email: "hab@gmail.com"
      },
    };

    return response;
  }
};

export { routeador };
