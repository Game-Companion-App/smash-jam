CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  user_password VARCHAR(255)
);

--DUMMY USER
INSERT INTO users
(user_name, user_email, user_password)
VALUES
('MarioFanatic99', 'mario@mario.com', '123');