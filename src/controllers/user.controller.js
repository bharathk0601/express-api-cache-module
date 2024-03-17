const express = require('express');
const userService = require('../service/user.service');
const { cacheMiddleware } = require('../middlewares/cache.middleware');

const router = express.Router();

router.get('/user/:id', cacheMiddleware(100), (req, res) => {
  userService.getUser(req.params.id, req.query.userId)
  .then(data => res.status(200).json(data))
  .catch(error => res.status(500).json({ message: 'Something went wrong!'}));
});

module.exports = router;