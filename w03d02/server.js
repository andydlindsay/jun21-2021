const express = require('express');
const morgan = require('morgan');
const port = 4567;

// in-memory database
const ideas = {
  abcd: {
    nuanced: false, 
    thought: 'should I go out for lunch today?',
    thinker: 'Hungry Andy'
  },
  efgh: {
    nuanced: false,
    thought: 'treats are nice',
    thinker: 'Fluffy the Cat'
  }
};

const generateId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Browse GET /ideas
app.get('/ideas', (req, res) => {
  const templateVars = { ideas };

  res.render('ideas', templateVars);
});

// Read GET /ideas/:id /ideas/abcd
app.get('/ideas/:id', (req, res) => {
  const ideaId = req.params.id;// 'abcd'
  const idea = ideas[ideaId];
  // console.log(idea);
  // console.log(req.params);

  if (!idea) {
    res.redirect('/ideas');
    return;
  }

  const templateVars = { idea, ideaId };
  res.render('idea', templateVars);
});

// Edit POST /ideas/:id
app.post('/ideas/:id', (req, res) => {
  const id = req.params.id;
  const thought = req.body.thought;
  
  ideas[id].thought = thought;

  res.redirect('/ideas');
});

// app.get('/ideas/new', (req, res) => {
//   res.render('new-idea-form');
// });
  
// Add POST /ideas
app.post('/ideas', (req, res) => {
  const newIdea = req.body;
  const id = generateId(); // 857 '857'

  ideas[id] = newIdea;

  res.redirect('/ideas');
});

// Delete POST /ideas/:id/delete
app.post('/ideas/:id/delete', (req, res) => {
  const id = req.params.id;
  delete ideas[id];

  res.redirect('/ideas');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
