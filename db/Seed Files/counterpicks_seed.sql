CREATE TABLE counterpicks (
counterpicks_id SERIAL PRIMARY KEY,
strong_1 INTEGER REFERENCES fighters(fighter_id),
strong_2 INTEGER REFERENCES fighters(fighter_id),
strong_3 INTEGER REFERENCES fighters(fighter_id),
weak_1 INTEGER REFERENCES fighters(fighter_id),
weak_2 INTEGER REFERENCES fighters(fighter_id),
weak_3 INTEGER REFERENCES fighters(fighter_id)
);

--Mario
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 40, 16, 24, 23, 67);

--Donkey Kong
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(76, 26, 54, 21, 9, 73);

--Link
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 26, 76, 9, 49, 21);

--Samus
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 16, 71, 8, 49, 59);

--Dark Samus
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 16, 54, 49, 8, 22);

--Yoshi
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(13, 2, 44, 67, 24, 23);

--Kirby
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 2, 76, 37, 24, 29);

--Fox
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(5, 4, 74, 24, 9, 47);

--Pikachu
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 26, 2, 11, 30, 14);

--Luigi
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 54, 2, 25, 5, 24);

--Ness
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 2, 16, 25, 24, 59);

--Captain Falcon
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(40, 74, 2, 9, 21, 24);

--Jigglypuff
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 2, 16, 37, 24, 23);

--Peach
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 1, 16, 24, 78, 3);

--Daisy
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 2, 76, 67, 62, 49);

--Bowser
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(13, 7, 40, 25, 5, 9);

--Ice Climbers
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(76, 26, 2, 73, 72, 36);

--Sheik
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(47, 54, 74, 6, 29, 43);

--Zelda
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 2, 71, 62, 6, 38);

--Dr. Mario
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(2, 44, 54, 59, 24, 23);

--Pichu
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 74, 2, 24, 36, 23);

--Falco
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 72, 73, 21, 9, 55);

--Marth
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 7, 26, 25, 36, 48);

--Lucina
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(7, 26, 6, 25, 36, 70);

--Young Link
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(71, 26, 2, 49, 8, 59);

--Ganondorf
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(55, 54, 76, 73, 11, 36);

--Mewtwo
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(71, 4, 54, 21, 38, 9);

--Roy
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 16, 2, 47, 36, 25);

--Chrom
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(2, 26, 40, 38, 9, 70);

--Mr. Game & Watch
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(11, 42, 36, 37, 67, 62);

--Meta Knight
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 20, 38, 51, 67, 11);

--Pit
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 65, 74, 9, 24, 21);

--Dark Pit
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(29, 26, 2, 63, 37, 21);

--Zero Suit Samus
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 76, 2, 21, 9, 38);

--Wario
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(2, 26, 74, 24, 9, 23);

--Snake
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(7, 26, 54, 11, 42, 59);

--Ike
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(13, 74, 7, 21, 25, 59);

--Pokemon Trainer - Squirtle
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(29, 76, 54, 9, 21, 62);

--Pokemon Trainer - Ivysaur
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 44, 36, 51, 59, 21);

--Pokemon Trainer - Charizard
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(7, 77, 13, 3, 21, 43);

--Diddy Kong
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(71, 26, 2, 21, 9, 49);

--Lucas
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 74, 36, 14, 59, 30);

--Sonic
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(63, 71, 76, 51, 9, 59);

--King Dedede
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 54, 76, 59, 9, 19);

--Olimar
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(21, 76, 18, 47, 68, 49);

--Lucario
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 18, 69, 16, 24, 78);

--R.O.B.
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(76, 54, 2, 9, 21, 67);

--Toon Link
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(76, 40, 2, 8, 49, 67);

--Wolf
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 44, 54, 21, 9, 24);

--Villager
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 26, 2, 59, 8, 9);

--Mega Man
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(44, 71, 26, 49, 45, 8);

--Wii Fit Trainer
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 2, 71, 21, 38, 9);

--Rosalina & Luma
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(42, 11, 54, 29, 9, 67);

--Little Mac
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(46, 26, 40, 71, 75, 59);

--Greninja
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 76, 2, 25, 36, 59);

--Mii Brawler
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 63, 69, 59, 21, 73);

--Mii Swordfighter
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 2, 76, 21, 59, 43);

--Mii Gunner
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 54, 67, 11, 78, 45);

--Palutena
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(71, 44, 74, 21, 9, 70);

--PAC-MAN
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 26, 2, 8, 59, 22);

--Robin
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 16, 40, 21, 9, 49);

--Shulk
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 12, 13, 36, 9, 47);

--Bowser Jr.
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 13, 54, 3, 49, 59);

--Duck Hunt
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(76, 26, 16, 19, 21, 9);

--Ryu
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(2, 50, 77, 73, 11, 72);

--Ken
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 71, 40, 11, 9, 4);

--Cloud
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(13, 6, 74, 9, 62, 49);

--Corrin
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(13, 26, 76, 4, 5, 72);

--Bayonetta
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 44, 71, 46, 21, 25);

--Inkling
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 12, 2, 24, 47, 23);

--Ridley
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 54, 76, 9, 21, 11);

--Simon
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 16, 71, 9, 21, 78);

--Richter
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(45, 26, 16, 21, 9, 59);

--King K. Rool
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 40, 2, 75, 36, 11);

--Isabelle
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 74, 2, 9, 21, 59);

--Incineroar
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(74, 2, 16, 73, 72, 42);

--Piranha Plant
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(69, 13, 71, 4, 78, 22);

--Joker
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(54, 2, 26, 9, 24, 70);

--Hero
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(26, 51, 76, 28, 8, 9);

--Banjo & Kazooie
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(63, 79, 77, 59, 3, 78);

--Terry
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(2, 76, 66, 78, 24, 9);

--Byleth
INSERT INTO counterpicks
(strong_1, strong_2, strong_3, weak_1, weak_2, weak_3)
VALUES
(2, 26, 16, 9, 78, 49);