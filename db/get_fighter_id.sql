SELECT *
FROM fighters
FULL OUTER JOIN fighter_skins
ON fighters.fighter_skins = fighter_skins.skin_id
FULL OUTER JOIN series_logos
ON fighters.fighter_series_icon = series_logos.series_logo_id
FULL OUTER JOIN series_icons
ON fighters.fighter_series_icon = series_icons.series_icon_id
FULL OUTER JOIN  fighter_stats
ON fighters.fighter_stats = fighter_stats.stats_id
FULL OUTER JOIN counterpicks
ON fighters.fighter_counterpicks = counterpicks.counterpicks_id
WHERE fighter_id = $1;