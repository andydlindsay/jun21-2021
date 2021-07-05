# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

### Web Server
* application running on a computer that speaks HTTP
* serve up files/data, HTML, CSS, JS, JSON, XML
* clients make requests and the server responds (if possible)

### HTTP
* Built on top of the persistent TCP connection
* request => response

### Find the computer
* where the other computer is? ip address, google.com, youtube.com, localhost
* what port it is listening on?
* spoiled for choice! 65,535 ports for every internet connection
* 443, 5432, 80, 8080

### Make a request
* Request is made up of a verb and a path
* Verb
  * Tells us what we want to do
  * GET => retrieve information
  * POST => create/update/delete something
* Path
  * Tells us what we want to do it to
  * Follows the domain/host in the url (eg /users, /maps, /blogposts)
www.amazon.ca/products
www.amazon.ca/reviews

### Receive a response
* Response code
  * Indicate success/failure of the request
  * 404, 200, 420, 418, 500, 301, 204, 201
* Response body (optional)

### Middleware
* code (in the form of a function) that runs between the request and the response
* fantastic for parsing body, cookies

request => middleware => middleware => middleware => route handler => response








