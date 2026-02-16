// import {PGlite} from '@electric-sql/pglite';
// import fs from 'fs';
// //async callback or anonymous function
// //install @electric-sql/pglite using <npm i @electric-sql/pglite>
// (async()=>{
//     //create an instance of PGlite from the constructor
//     const db = new PGlite();
//     await db.exec(`
//         CREATE TABLE IF NOT EXISTS cars(
//         id SERIAL PRIMARY KEY,
//         brand TEXT,
//         model TEXT,
//         year INTEGER,
//         price INTEGER,
//         color TEXT,
//         condition INTEGER,
//         sold BOOLEAN
//     );
//     INSERT INTO cars (brand, model, year, price, color, condition, sold)
//     VALUES
//     ('Toyota', 'Camry', 2020, 25000, 'Blue', 5, false),
//     ('Honda', 'Accord', 2019, 23000, 'Red', 4, true),
//     ('Ford', 'Mustang', 2021, 35000, 'Black', 5, false),
//     ('Chevrolet', 'Malibu', 2018, 20000, 'White', 3, true),
//     ('Tesla', 'Model 3', 2022, 45000, 'Silver', 5, false),
//     ('Toyota', 'Camry', 2015, 15000, 'Green', 4, true),
//     ('Honda', 'Camry', 2016, 18000, 'Yellow', 4, false),
//     ('Ford', 'F-150', 2017, 30000, 'Blue', 5, true),
//     ('Chevrolet', 'Impala', 2019, 22000, 'Red', 3, false),
//     ('Tesla', 'Model S', 2020, 80000, 'Black', 5, true),
//     ('Toyota', 'RAV4', 2021, 28000, 'White', 4, false),
//     ('Honda', 'Camry', 2018, 24000, 'Silver', 4, true),
//     ('Ford', 'Escape', 2016, 19000, 'Green', 3, false),
//     ('Chevrolet', 'Equinox', 2017, 21000, 'Yellow', 4, true),
//     ('Tesla', 'Model X', 2021, 90000, 'Blue', 5, false),
//     ('Toyota', 'Highlander', 2019, 32000, 'Red', 4, true),
//     ('Honda', 'Pilot', 2020, 35000, 'Black', 5, false),
//     ('Ford', 'Explorer', 2018, 28000, 'White', 4, true),
//     ('Chevrolet', 'Traverse', 2019, 26000, 'Silver', 3, false),
//     ('Tesla', 'Model Y', 2022, 50000, 'Green', 5, true);
//     `);

//     const query = fs.readFileSync('query.sql', 'utf-8');
//     const response = await db.query(query);

//     console.clear();
//     console.table(response.rows);
// })();