SELECT *
FROM tournaments t
JOIN bracket_info b
ON t.tournament_id = b.bracket_info_id
WHERE tournament_id = 4;