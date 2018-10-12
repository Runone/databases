var db = require('../db');

module.exports = {
  usernames: {
    // Ditto as above.
    get: function (cb) {
      var queryStr = 'select * from usernames';
      db.query(queryStr, params, (err, results) => {
        cb(err, results);
      });
    },
    post: function (params, cb) {
      var queryStr = 'insert into usernames(username) values (?)';
      db.query(queryStr, params, (err, results) => {
        cb(err, results);
      });
    }
  },

  roomnames: {
    // Ditto as above
    get: function (cb) {
      var queryStr = 'select * from roomnames';
      db.query(queryStr, params, (err, results) => {
        cb(err, results);
      });
    },
    post: function (params, cb) {
      var queryStr = 'insert into roomnames(roomname) values (?)';
      db.query(queryStr, params, (err, results) => {
        cb(err, results);
      });
    }
  },

  messages: {
    // a function which produces all the messages
    get: function (cb) {
      var queryStr = 'select messages.id, messages.message, messages.roomname, usernames.username \
                      from messages left outer join usernames on (messages.userid = usernames.id) \
                      order by messages.id desc';
      db.query(queryStr, (err, results) => {
        cb(err, results);
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (params, cb) {
      var queryStr = 'insert into messages(message, userid, roomname \
                      value (?, (select id from usernames where username = ? limit 1), ?)';
      db.query(queryStr, params, (err, results) => {
        cb(err, results);
      });
    } 
  }
};

















