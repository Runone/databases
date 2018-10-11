CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE usernames (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  username text,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  room text,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  message text,
  createdAt date,
  username integer,
  room integer,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usernames(id),
  FOREIGN KEY (room) REFERENCES rooms(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

