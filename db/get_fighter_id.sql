SELECT *
FROM fighters
INNER JOIN fighter_skins
ON fighters.fighter_skins = fighter_skins.skin_id
INNER JOIN series_logos
ON fighters.fighter_series_icon = series_logos.series_logo_id
INNER JOIN series_icons
ON fighters.fighter_series_icon = series_icons.series_icon_id
INNER JOIN  fighter_stats
ON fighters.fighter_stats = fighter_stats.stats_id
INNER JOIN counterpicks
ON fighters.fighter_counterpicks = counterpicks.counterpicks_id
WHERE fighter_id = $1;