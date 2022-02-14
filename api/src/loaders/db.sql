CREATE DATABASE tododb;

CREATE TABLE todo(
    todo_id serial PRIMARY KEY,
    description text NOT NULL,
    name varchar(200) NOT NULL,
    state BOOLEAN NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
