var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    }
  },

  usernames: {
    // Ditto as above
    get: function (req, res) {
      models.usernames.get((err, results) => {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.usernames.post(params, (err, results) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    }
  },

  roomnames: {
    // Ditto as above
    get: function (req, res) {
      models.roomnames.get((err, results) => {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.roomname];
      models.roomnames.post(params, (err, results) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    }
  }
};

