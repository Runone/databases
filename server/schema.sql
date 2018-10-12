CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE usernames (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  username varchar(40),
  PRIMARY KEY (id)
);

CREATE TABLE roomnames (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  message varchar(280),
  userid integer NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

