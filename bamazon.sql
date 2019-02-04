Drop database if exists bamazon;
create database	bamazon;
use bamazon;

create table products (
	item_id integer (100) not null auto_increment ,
    product_name varchar (255) not null,
    price varchar (100) not null,
    stock_quantity varchar (200) not null,
    primary key(item_id)
);

insert into products( product_name, price, stock_quantity)
values ("Yeezy", 500, 5);

insert into products( product_name, price, stock_quantity)
values ("Cat Turntable", 25, 100);

insert into products( product_name, price, stock_quantity)
values ("LadyBugs", 15, 1000000);

insert into products( product_name, price, stock_quantity)
values ("A cat carrier dress", 16.99, 150);

insert into products( product_name, price, stock_quantity)
values ("Baby hands candles", 16, 177);

insert into products( product_name, price, stock_quantity)
value ("An inflatable pool bull", 34.95, 75);

insert into products( product_name, price, stock_quantity)
values ("An inflatable cat horn",16, 250);

insert into products( product_name, price, stock_quantity)
values ("A life-size cutout of Danny DeVito", 74.85, 2);

insert into products( product_name, price, stock_quantity)
values ("A pigeon mask","24.97",75);

insert into products( product_name, price, stock_quantity)
values ("Nothing", 6.98, 1000);

select * from products;


