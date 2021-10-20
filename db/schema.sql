DROP DATABASE IF EXISTS smoor_db_alpha;
CREATE DATABASE smoor_db_alpha;

USE smoor_db_alpha;

CREATE TABLE formal_scrolls (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    scroll_name varchar(100),
    school varchar(10) NOT NULL,
    formal_level INT NOT NULL,
    base_cost INT NOT NULL,
    base_coin varchar(6),
    shotted BOOLEAN,
    component varchar(100),
    notes TEXT
);

CREATE TABLE formal_comps (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    component varchar(100),
    school varchar(10) NOT NULL,
    formal_level INT NOT NULL,
    base_cost INT NOT NULL,
    base_coin varchar(6),
    rarity varchar(10),
    scroll_name varchar(100),
    notes TEXT
);