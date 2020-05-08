INSERT INTO users
(user_name, user_email, user_password)
VALUES
($1, $2, $3)
RETURNING user_name, user_email;