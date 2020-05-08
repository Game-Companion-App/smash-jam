CREATE TABLE bracket_info (
  bracket_info_id SERIAL PRIMARY KEY,
  bracket_round1 text[][],
  bracket_round2 text[][],
  bracket_round3 text[][],
  bracket_round4 text[][],
  bracket_round5 text[][],
  bracket_round6 text[][],
  bracket_round7 text[][]
);

-- INSERT INTO bracket_info
-- (
--   bracket_round1,
--   bracket_round2,
--   bracket_round3,
--   bracket_round4,
--   bracket_round5,
--   bracket_round6,
--   bracket_round7,
-- )
-- VALUES
-- (
--     ARRAY [ ['p1', 'Kirby'], ['p2', 'Peach'], ['p3', 'Cloud'], ['p4', 'Yoshi'] ],
--     ARRAY [ ['p2', 'Peach'], ['p3', 'Cloud'] ]
-- );