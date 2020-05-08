CREATE TABLE bracket_info (
  bracket_info_id SERIAL PRIMARY KEY,
  bracket_round1 VARCHAR(255)[][],
  bracket_round2 VARCHAR(255)[][],
  bracket_round3 VARCHAR(255)[][],
  bracket_round4 VARCHAR(255)[][],
  bracket_round5 VARCHAR(255)[][],
  bracket_round6 VARCHAR(255)[][],
  bracket_round7 VARCHAR(255)[][]
);

INSERT INTO bracket_info
(bracket_round1,
bracket_round2,
bracket_round3,
bracket_round4,
bracket_round5,
bracket_round6,
bracket_round7)
VALUES
(
  ARRAY [ ['p1', 'Kirby'], ['p2', 'Peach'], ['p3', 'Cloud'], ['p4', 'Yoshi'] ],
  ARRAY [ ['p1', 'Kirby'], ['p4', 'Yoshi'] ],
  ARRAY [ ['p4', 'Yoshi'] ],
  ARRAY ['', ''],
  ARRAY ['', ''],
  ARRAY ['', ''],
  ARRAY ['', '']
)
WHERE bracket_info_id = 4;