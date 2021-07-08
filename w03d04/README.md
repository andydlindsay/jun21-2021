# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [ ] Method Override [Stretch]

### Hashing
* one-way algorithm
* "cannot" be undone

* plaintext password => hashing algo => random alpha-numeric string "hash"
* salt = additional info that gets added to the password

salt + "hello" === asdklfhklashdf+hello

* compare the incoming password, we are going to hash it again, but not us
* we let the comparison algo hash it for us

### Encryption
* two-way algorithm

plaintext => encryption algo => random alpha-numeric => cookie

userId = 12
userId = al;ksdhfjo'ash[ovi


server
plaintext => set the cookie => middleware encrypt => browser

encrypted cookie => middleware decrypt => route handlers plaintext


http://localhost:1234/protected

person-in-the-middle attack
monster-in-the-middle

### HTTPS
* HTTP Secure
* TLS Transport Layer Security
* Asymetric encryption: public key and a private key


* Client = data + public key = encrypt => web server
* Server = encrypted data + private key = decrypt => insert data/read data

https://www.google.com/


### REST
* Naming convention for routes
* REpresentational State Transfer
* routes we use to interact with a resource, represent the underlying data structure
* RESTful architecture

B GET   /turtles
R GET   /turtles/:id
E POST  /turtles/:id
A POST  /turtles
D POST  /turtles/:id/delete

R GET /maps/:mapId/pins
R GET /authors/:authorId/books
R GET /recipes/:recipeId/ingredients

### Alternate Verbs
* PUT, PATCH, DELETE (GET, POST)

* PUT => replace the entire resource
* PATCH => replace a piece of the resource
* DELETE => deletes a resource

B GET    /turtles
R GET    /turtles/:id
E PATCH  /turtles/:id
A POST   /turtles
D DELETE /turtles/:id

B GET    /turtles
R GET    /turtles/:id
E POST   /turtles/:id
A POST   /turtles
D POST   /turtles/:id/delete


