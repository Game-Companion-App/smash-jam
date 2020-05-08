CREATE TABLE tournaments (
  tournament_id SERIAL PRIMARY KEY,
  host_username VARCHAR(255),
  tournament_name VARCHAR(250),
  tournament_password VARCHAR(250),
  tournament_key VARCHAR(250),
  tournament_size INTEGER
);