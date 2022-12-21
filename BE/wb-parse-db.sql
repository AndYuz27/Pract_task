-- Database: postgres

-- DROP DATABASE IF EXISTS postgres;

CREATE DATABASE postgres
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE postgres
    IS 'default administrative connection database';


create table parse_wb_cards
(
	ID_Card SERIAL not null constraint PK_dolzhnost primary key,
	User_name varchar(32) not null constraint UQ_User_Name unique,
	Admin_role boolean not null default 'false'
);

insert into users (User_name, Admin_role)
values ('AndY_admin', true), ('Jack Garry', false);
select 'Имя пользователя: '||User_name||', Админка: '|| Admin_role as "Список пользователей" from users 



create table parse_wb_product
(
	ID_parse_product SERIAL not null constraint PK_parse_product primary key,
	date_of_pars date not null,
	Name_of_product varchar(256) not null,
	descr_of_product varchar(1024) not null,
	price int not null,
	Seller varchar(128) not null,
	Seller_rathing int not null,
	date_of_devilery date not null,
	count_feedbacks int not null,
	rathing_of_product int not null
	
	
);

	