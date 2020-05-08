INSERT INTO bracket_info
(
  bracket_round1,
  bracket_round2,
  bracket_round3,
  bracket_round4,
  bracket_round5,
  bracket_round6,
  bracket_round7
)
VALUES
(
  ARRAY $1,
  ARRAY $2,
  ARRAY $3,
  ARRAY $4,
  ARRAY $5,
  ARRAY $6,
  ARRAY $7
)
WHERE bracket_info_id = $8;

SELECT *
FROM tournaments t
JOIN bracket_info b
ON t.tournament_id = b.bracket_info_id
WHERE tournament_id = $8;