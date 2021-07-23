# W05D05 - Mid-term Project Kickoff

### Pick a Project

### User Stories
* describes how a user will interact with our app and also why

* As a ______, I can ________, because ________

* As a logged in user, I can favourite a blog post, because I want to review it later
* As a user, I can see a list of available maps, because I am interested in things in my area

### Identify the nouns
* Nouns are resources
* tables
* ERD

### Routes
* create routes to resources

B  GET   /menuitems
R  GET   /menuitems/:id
E  POST  /menuitems/:id
A  POST  /menuitems
D  POST  /menuitems/:id/delete

B  GET    /menuitems
R  GET    /menuitems/:id
E  PATCH  /menuitems/:id
A  POST   /menuitems
D  DELETE /menuitems/:id

PUT, PATCH, DELETE

### MVP
* Minimum Viable Product
* what is the minimum feature-set that we think users will find useful

* Minimum Viable Demo MVD
* If you're not going to demo it, don't build it

### Wireframes/Mockups
* balsamiq, moqups, draw.io, pen && paper

### User Login/Registration
* Don't do it

```js
// http://localhost:3000/login/2
app.get('/login/:id', (req, res) => {
  // set the cookie
  res.cookie('user_id', req.params.id);

  // encrypted cookies
  req.cookie.user_id = req.params.id;

  res.redirect('/');
});
```

### Stack
* FE - HTML, CSS, JS, jQuery, SCSS
* BE - Node, Express, Postgres

### SPA vs Multi-page
* not mutually exclusive

### Git
* merge conflicts
* two or more devs touch the same file
* merges locally or in the cloud?
* `git pull` multiple times a day

1. working on my branch
2. there's a new master
3. commit my branch
4. checkout master
5. pull master
6. checkout my branch
7. `git merge master`

### Master
* Do not code on master/main

### Communication
* imessenger, slack, discord, hangouts, meet, zoom
* 1pm, 3pm, 5pm




