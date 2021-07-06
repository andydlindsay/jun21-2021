# W03D02 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

CRUD === Create Read Update Delete
BREAD === Browse Read Edit Add Delete

* ideas
* nuanced: boolean
* thought: string
* thinker: string

object of objects



https://www.google.com/search?
q=query+string&
sxsrf=ALeKk00CSNKJSWl-jinYEzv4XtB73BYjtQ%3A1625593536888&
source=hp&
ei=wJbkYNntM-C10PEP6oyHyAU&iflsig=AINFCbYAAAAAYOSk0ALijMwLLBpG1lqdUlYwOWjBAFdp&oq=query+string&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQguELEDOgUIABCxAzoICC4QxwEQrwE6CAgAELEDEIMBOggILhCxAxCDAToLCC4QsQMQxwEQrwE6AgguOgQIABAKUNYFWIAQYNUQaABwAHgAgAFJiAGEBpIBAjEymAEAoAEBqgEHZ3dzLXdpeg&sclient=gws-wiz&ved=0ahUKEwjZzcDq_87xAhXgGjQIHWrGAVkQ4dUDCAk&uact=5


req.query.q


http://localhost:4567/ideas/abcd?thought=hello+world

Edit    POST /ideas/:id
Delete  POST /ideas/:id/delete


Post => Redirect => Get

longURL.includes('http'); // true

GET /u/:shortURL
res.redirect(longUrl); // http:// or https://www.google.com

res.redirect('www.google.com');
GET /u/www.google.com

res.redirect(undefined);
GET /u/undefined

https://www.google.com/
