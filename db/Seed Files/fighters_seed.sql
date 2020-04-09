CREATE TABLE fighters (
fighter_id SERIAL PRIMARY KEY,
fighter_name VARCHAR(255),
fighter_video TEXT,
fighter_number INTEGER,
fighter_skins INTEGER REFERENCES fighter_skins(skin_id),
fighter_series_logo INTEGER REFERENCES series_logos(series_logo_id),
fighter_series_icon INTEGER REFERENCES series_icons(series_icon_id),
fighter_stats INTEGER REFERENCES fighter_stats(stats_id),
fighter_counterpicks INTEGER REFERENCES counterpicks(counterpicks_id)
);

--Mario
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo,fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'MARIO',
'https://www.youtube.com/watch?time_continue=1&v=INk1W8OujQI&feature=emb_logo',
1,
1,
1,
1,
1,
1
);

--Donkey Kong
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DONKEY KONG',
'https://www.youtube.com/watch?v=K7IsUGeFXP0&feature=emb_logo',
2,
2,
2,
2,
2,
2
);

--Link
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'LINK',
'https://www.youtube.com/watch?v=kfeUdBi67G4&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=3',
3,
3,
3,
3,
3,
3
);

--Samus
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'SAMUS',
'https://www.youtube.com/watch?v=I9tcvSeemVo&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=4',
4,
4,
4,
4,
4,
4
);

--Dark Samus
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DARK SAMUS',
'https://www.youtube.com/watch?v=sXG-oI6VChg&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=5',
5,
5,
4,
5,
5,
5
);

--Yoshi
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'YOSHI',
'https://www.youtube.com/watch?v=bQsMQankmEs&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=6',
6,
6,
5,
6,
6,
6
);

--Kirby
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'KIRBY',
'https://www.youtube.com/watch?v=1FPJs_c3qY4&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=7',
7,
7,
6,
7,
7,
7
);

--Fox
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'FOX',
'https://www.youtube.com/watch?v=Arw6c0dJHAE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=8',
8,
8,
7,
8,
8,
8
);

--Pikachu
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PIKACHU',
'https://www.youtube.com/watch?v=7LfEvnLc3mI&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=9',
9,
9,
8,
9,
9,
9
);

--Luigi
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'LUIGI',
'https://www.youtube.com/watch?v=LlNXKM3sHWU&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=10',
10,
10,
1,
10,
10,
10
);

--Ness
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'NESS',
'https://www.youtube.com/watch?v=jtlUHmonMGQ&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=11',
11,
11,
9,
11,
11,
11
);

--Captain Falcon
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'CAPTAIN FALCON',
'https://www.youtube.com/watch?v=ayUTQsO6d1E&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=12',
12,
12,
10,
12,
12,
12
);

--Jigglypuff
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'JIGGLYPUFF',
'https://www.youtube.com/watch?v=IlojAAwCfoA&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=13',
13,
13,
8,
13,
13,
13
);

--Peach
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PEACH',
'https://www.youtube.com/watch?v=ETVQLZV7J8g&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=14',
14,
14,
1,
14,
14,
14
);

--Daisy
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DAISY',
'https://www.youtube.com/watch?v=YyzJnpX2ZcY&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=15',
15,
15,
1,
15,
15,
15
);

--Bowser
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'BOWSER',
'https://www.youtube.com/watch?v=liuwszyDhXM&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=16',
16,
16,
1,
16,
16,
16
);

--Ice Climbers
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ICE CLIMBERS',
'https://www.youtube.com/watch?v=FUzcsIjn4LY&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=17',
17,
17,
11,
17,
17,
17
);

--Sheik
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'SHEIK',
'https://www.youtube.com/watch?v=cCQXBEiARns&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=18',
18,
18,
3,
18,
18,
18
);

--Zelda
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ZELDA',
'https://www.youtube.com/watch?v=fMDgFn3qQ_c&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=19',
19,
19,
3,
19,
19,
19
);

--Dr. Mario
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DR. MARIO',
'https://www.youtube.com/watch?v=w0qVpaEtEF4&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=20',
20,
20,
1,
20,
20,
20
);

--Pichu
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PICHU',
'https://www.youtube.com/watch?v=9ZD89yfBCyE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=21',
21,
21,
8,
21,
21,
21
);

--Falco
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'FALCO',
'https://www.youtube.com/watch?v=rJj9J5MW8xg&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=22',
22,
22,
7,
22,
22,
22
);

--Marth
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'MARTH',
'https://www.youtube.com/watch?v=icuBIlBPYj0&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=23',
23,
23,
12,
23,
23,
23
);

--Lucina
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'LUCINA',
'https://www.youtube.com/watch?v=vQqvKaCne4k&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=24',
24,
24,
12,
24,
24,
24
);

--Young Link
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'YOUNG LINK',
'https://www.youtube.com/watch?v=qpzDPfCzB7g&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=25',
25,
25,
3,
25,
25,
25
);

--Ganondorf
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'GANONDORF',
'https://www.youtube.com/watch?v=Q7pzoLQlrsM&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=26',
26,
26,
3,
26,
26,
26
);

--Mewtwo
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'MEWTWO',
'https://www.youtube.com/watch?v=BcCpZHVIv9Q&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=27',
27,
27,
8,
27,
27,
27
);

--Roy
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ROY',
'https://www.youtube.com/watch?v=FtDn6HBn_Qk&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=28',
28,
28,
12,
28,
28,
28
);

--Chrom
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'CHROM',
'https://www.youtube.com/watch?v=733o521fbdE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=29',
29,
29,
12,
29,
29,
29
);

--Mr. Game & Watch
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'MR. GAME & WATCH',
'https://www.youtube.com/watch?v=Ic0xR07DhSY&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=30',
30,
30,
13,
30,
30,
30
);

--Meta Knight
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'META KNIGHT',
'https://www.youtube.com/watch?v=A99IYmm50RY&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=31',
31,
31,
6,
31,
31,
31
);

--Pit
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PIT',
'https://www.youtube.com/watch?v=M_Pszs9I7S4&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=32',
32,
32,
14,
32,
32,
32
);

--Dark Pit
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DARK PIT',
'https://www.youtube.com/watch?v=q2hJjyP8FGA&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=33',
33,
33,
14,
33,
33,
33
);

--Zero Suit Samus
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ZERO SUIT SAMUS',
'https://www.youtube.com/watch?v=Y4PTxiq11Fk&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=34',
34,
34,
4,
34,
34,
34
);

--Wario
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'WARIO',
'https://www.youtube.com/watch?v=4lK7zkTInNA&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=35',
35,
35,
15,
35,
35,
35
);

--Snake
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'SNAKE',
'https://www.youtube.com/watch?v=7NLKrPYYQt0&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=36',
36,
36,
16,
36,
36,
36
);

--Ike
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'IKE',
'https://www.youtube.com/watch?v=-aV6h3jWO6c&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=37',
37,
37,
12,
37,
37,
37
);

--Pokemon Trainer - Squirtle
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'POKEMON TRAINER - SQUIRTLE',
'https://www.youtube.com/watch?v=dYpf9FoPN_M&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=38',
38,
38,
8,
38,
38,
38
);

--Pokemon Trainer - Ivysaur
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'POKEMON TRAINER - IVYSAUR',
'https://www.youtube.com/watch?v=dYpf9FoPN_M&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=38',
39,
38,
8,
38,
39,
39
);

--Pokemon Trainer - Charizard
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'POKEMON TRAINER - CHARIZARD',
'https://www.youtube.com/watch?v=dYpf9FoPN_M&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=38',
40,
38,
8,
38,
40,
40
);

--Diddy Kong
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DIDDY KONG',
'https://www.youtube.com/watch?v=AjywYr-fuqY&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=39',
41,
39,
2,
39,
41,
41
);

--Lucas
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'LUCAS',
'https://www.youtube.com/watch?v=GWjfyyGNL8c&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=40',
42,
40,
9,
40,
42,
42
);

--Sonic
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'SONIC',
'https://www.youtube.com/watch?v=138MW7zOw0M&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=41',
43,
41,
17,
41,
43,
43
);

--King Dedede
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'KING DEDEDE',
'https://www.youtube.com/watch?v=bikxqlRPN64&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=42',
44,
42,
6,
42,
44,
44
);

--Olimar
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'OLIMAR',
'https://www.youtube.com/watch?v=AFHgO8rMzcg&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=43',
45,
43,
18,
43,
45,
45
);

--Lucario
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'LUCARIO',
'https://www.youtube.com/watch?v=7gfpUgrLEwo&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=44',
46,
44,
8,
44,
46,
46
);

--R.O.B.
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'R.O.B.',
'https://www.youtube.com/watch?v=NqL7m9CuGD0&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=45',
47,
45,
19,
45,
47,
47
);

--Toon Link
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'TOON LINK',
'https://www.youtube.com/watch?v=62uBiZfw9w0&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=46',
48,
46,
3,
46,
48,
48
);

--Wolf
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'WOLF',
'https://www.youtube.com/watch?v=YLG2LGY95f4&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=47',
49,
47,
7,
47,
49,
49
);

--Villager
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'VILLAGER',
'https://www.youtube.com/watch?v=wY_wCijU1Pk&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=48',
50,
48,
20,
48,
50,
50
);

--Mega Man
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'MEGA MAN',
'https://www.youtube.com/watch?v=m4632ulEnNc&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=49',
51,
49,
21,
49,
51,
51
);

--Wii Fit Trainer
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'Wii FIT TRAINER',
'https://www.youtube.com/watch?v=kJbHRv4nCBw&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=50',
52,
50,
22,
50,
52,
52
);

--Rosalina & Luma
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ROSALINA & LUMA',
'https://www.youtube.com/watch?v=JX2mySkglVU&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=51',
53,
51,
1,
51,
53,
53
);

--Little Mac
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'LITTLE MAC',
'https://www.youtube.com/watch?v=vBM09wj8xwE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=52',
54,
52,
23,
52,
54,
54
);

--Greninja
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'GRENINJA',
'https://www.youtube.com/watch?v=rMCn8NuATaE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=53',
55,
53,
8,
53,
55,
55
);

--Mii Brawler
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'Mii BRAWLER',
'https://www.youtube.com/watch?v=qdSKO-mc2n8&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=54',
56,
54,
24,
54,
56,
56
);

--Mii Swordfighter
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'Mii SWORDFIGHTER',
'https://www.youtube.com/watch?v=qdSKO-mc2n8&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=54',
57,
55,
24,
54,
57,
57
);

--Mii Gunner
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'Mii GUNNER',
'https://www.youtube.com/watch?v=qdSKO-mc2n8&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=54',
58,
56,
24,
54,
58,
58
);

--Palutena
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PALUTENA',
'https://www.youtube.com/watch?v=0yD_B4ZkdME&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=55',
59,
57,
14,
55,
59,
59
);

--PAC-MAN
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PAC-MAN',
'https://www.youtube.com/watch?v=NPzo-TuH0C0&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=56',
60,
58,
25,
56,
60,
60
);

--Robin
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ROBIN',
'https://www.youtube.com/watch?v=QBxtnTgUwcM&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=57',
61,
59,
12,
57,
61,
61
);

--Shulk
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'SHULK',
'https://www.youtube.com/watch?v=XWeR6XmzZyI&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=58',
62,
60,
26,
58,
62,
62
);

--Bowser Jr.
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'BOWSER JR.',
'https://www.youtube.com/watch?v=fZ2dm9EoJfE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=59',
63,
61,
1,
59,
63,
63
);

--Duck Hunt
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'DUCK HUNT',
'https://www.youtube.com/watch?v=anhjSVXYL6E&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=60',
64,
62,
27,
60,
64,
64
);

--Ryu
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'RYU',
'https://www.youtube.com/watch?v=9LAjpoI-ap8&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=61',
65,
63,
28,
61,
65,
65
);

--Ken
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'KEN',
'https://www.youtube.com/watch?v=9_tQRugeXik&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=62',
66,
64,
28,
62,
66,
66
);

--Cloud
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'CLOUD',
'https://www.youtube.com/watch?v=hccjmuujoD4&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=63',
67,
65,
29,
63,
67,
67
);

--Corrin
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'CORRIN',
'https://www.youtube.com/watch?v=7B4w2Tsy9PE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=64',
68,
66,
12,
64,
68,
68
);

--Bayonetta
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'BAYONETTA',
'https://www.youtube.com/watch?v=oYe8HpzYebg&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=65',
69,
67,
30,
65,
69,
69
);

--Inkling
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'INKLING',
'https://www.youtube.com/watch?v=O4-7-bJWUsc&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=66',
70,
68,
31,
66,
70,
70
);

--Ridley
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'RIDLEY',
'https://www.youtube.com/watch?v=EDi1Zf_vJsY&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=67',
71,
69,
4,
67,
71,
71
);

--Simon
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'SIMON',
'https://www.youtube.com/watch?v=RY7WL-n1atg&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=68',
72,
70,
32,
68,
72,
72
);

--Richter
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'RICHTER',
'https://www.youtube.com/watch?v=ELrWbGScgwU&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=69',
73,
71,
32,
69,
73,
73
);

--King K. Rool
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'KING K. ROOL',
'https://www.youtube.com/watch?v=pKcXgSV8PTE&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=70',
74,
72,
2,
70,
74,
74
);

--Isabelle
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'ISABELLE',
'https://www.youtube.com/watch?v=ML8fn3eInnc&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=71',
75,
73,
20,
71,
75,
75
);

--Incineroar
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'INCINEROAR',
'https://www.youtube.com/watch?v=eE6Agn9d89U&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=72',
76,
74,
8,
72,
76,
76
);

--Piranha Plant
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'PIRANHA PLANT',
'https://www.youtube.com/watch?v=3sZsk8VHY2g&list=PLmTaoP4qBjoUgvgKvXtvfHXAdO6X-BSWC&index=73',
77,
75,
1,
73,
77,
77
);

--Joker
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'JOKER',
'https://www.youtube.com/watch?time_continue=3&v=W4PG9qx9x2s&feature=emb_logo',
78,
76,
33,
74,
78,
78
);

--Hero
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'HERO',
'https://www.youtube.com/watch?v=pupll3ON-WA&feature=emb_logo',
79,
77,
34,
75,
79,
79
);

--Banjo & Kazooie
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'BANJO & KAZOOIE',
'https://www.youtube.com/watch?time_continue=1&v=qyJ4djjQOr0&feature=emb_logo',
80,
78,
35,
76,
80,
80
);

--Terry
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'TERRY',
'https://www.youtube.com/watch?time_continue=1&v=lvT-b5y9tsE&feature=emb_logo',
81,
79,
36,
77,
81,
81
);

--Byleth
INSERT INTO fighters
(fighter_name, fighter_video, fighter_number, fighter_skins, fighter_series_logo, fighter_series_icon, fighter_stats, fighter_counterpicks)
VALUES
(
'BYLETH',
'https://www.youtube.com/watch?v=6fwAk1P8TLU&feature=emb_logo',
82,
80,
12,
78,
82,
82
);