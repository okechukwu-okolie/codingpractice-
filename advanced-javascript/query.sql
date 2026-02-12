-- SELECT brand, model, year FROM cars;
-- SELECT * FROM cars WHERE year > 2015;
SELECT * FROM cars 
    WHERE brand NOT LIKE '%Tesla%'
    -- WHERE model LIKE 'Ca_';