SELECT fighter_id, fighter_name, fighter_number, skin_1, icon_image
FROM fighters
INNER JOIN fighter_skins
ON fighters.fighter_skins = fighter_skins.skin_id
INNER JOIN series_icons
ON fighters.fighter_series_icon = series_icons.series_icon_id
ORDER BY fighter_id ASC;