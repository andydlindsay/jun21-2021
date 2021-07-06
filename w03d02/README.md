# W03D02 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

### CRUD and BREAD

* There are 5 main operations that we can perform on a particular resource (or group of resources)
  * Create a new resource
  * Retrieve all of the existing resources
  * Retrieve a particular resource
  * Edit a particular resource
  * Delete a particular resource

* We use acronyms to help us remember these operations: **CRUD** and **BREAD**
  * **CRUD**: **C**reate **R**ead **U**pdate **D**elete
  * **BREAD**: **B**rowse **R**ead **E**dit **A**dd **D**elete

### Forms vs Anchor Tags
* Anchor tags (`<a></a>`) only make `GET` requests
  * Anchor tags are generally used to link between websites or to different pages on the same site
* Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)
  * Forms are used to collect and submit user information
* If data is being retrieved, use a `GET` request
* If data is being updated/changed/created, use a `POST` request (therefore, a form)
  * NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

### Useful Links
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
