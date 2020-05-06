CREATE TABLE tournaments (
tournament_id SERIAL PRIMARY KEY,
tournament_name VARCHAR(250),
tournament_password VARCHAR(250),
tournament_key VARCHAR(250),
tournament_size INTEGER
);