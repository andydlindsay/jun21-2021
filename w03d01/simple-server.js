const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request);
  const url = request.url;
  const method = request.method;

  // GET /home, POST /users
  const reqStr = `${method} ${url}`;
  console.log(reqStr);

  if (reqStr === 'GET /home') {
    response.end('you have visited the home page');
  } else if (reqStr === 'GET /about') {
    response.write('welcome to the about page');
  } else {
    response.write('resource not found');
  }

  // response.write('hello there');
  // response.end();
});

server.listen(12345);
