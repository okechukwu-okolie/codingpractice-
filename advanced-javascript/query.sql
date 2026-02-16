-- SELECT brand, model, year FROM cars;
-- SELECT * FROM cars WHERE year > 2015;
-- SELECT * FROM cars 
-- where sold = true or sold = false
-- -- and (color = 'Red' or color = 'Blue' or color = 'Black')
-- order by price 
-- limit 10

-- select * from cars
-- where price >= 10000 and color = 'Yellow' and sold = true

-- //used for counting
-- select count(*) from cars
-- where sold = true

-- used for summing contents in a column

--  here you are referencing just one column for your filtering by using the max key word
--    select max(price) as most_expensive from cars
--    where sold =true

-- --    looking for average 
-- select avg(price) from cars
-- where model = 'Camry'

-- to round down the zeros(floor and ceiling)
-- select floor(avg(price)) from cars
-- where model = 'Camry'

--  here the cal for ceil, avg, etc
-- select ceil(avg(price)) as avg,
-- min(price),
-- max(price) from cars
-- where sold is true



-- select model, count(model), floor(avg(price)) as AVG from cars
-- where sold = false
-- group by(model)
-- having count(model) > 0;


-- select year,
-- count(year) as car_count,
-- max(price),
--  min(price) 
-- from cars
-- where sold = true
-- group by year
-- having count(year) > 1 
-- order by car_count 


-- select model, color, year from cars
-- WHERE sold IS FALSE
-- -- only show the oldest 5 cars in the database
-- ORDER BY year
-- limit 5



select color , count(color) from cars
where sold = false 
group by color
having count(color) > 1
order by count(color) desc
