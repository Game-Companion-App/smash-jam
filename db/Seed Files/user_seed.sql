CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_fighter VARCHAR(255),
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  user_password VARCHAR(255),
  user_profil_pic VARCHAR(255),
);

--DUMMY USER
INSERT INTO users
(user_name, user_email, user_password, user_profile_pic)
VALUES
('Mario', 'MarioFanatic99', 'mario@mario.com', '123', 'https://i.pinimg.com/originals/29/7a/09/297a09c9654f333a3721d03d315826a7.jpg');