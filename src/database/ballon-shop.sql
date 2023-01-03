if exists drop table balloons;

create table balloons (id serial not null primary key, color_name text, count integer,UNIQUE(color_name));

insert into balloons(color_name,count) values('red',0);
insert into balloons(color_name,count) values('yellow',0);
insert into balloons(color_name,count) values('green',0);
insert into balloons(color_name,count) values('blue',0);
insert into balloons(color_name,count) values('pink',0);
