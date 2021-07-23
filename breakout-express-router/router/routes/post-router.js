const express = require('express');
const router = express.Router();

const postRouter = (db) => {
  // GET /posts
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts;')
      .then((queryResult) => {
        res.json(queryResult.rows);
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then((queryResult) => {
        res.json(queryResult.rows[0]);
      });
  });

  return router;
};

module.exports = postRouter;
