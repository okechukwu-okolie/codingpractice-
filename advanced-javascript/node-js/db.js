//provide a data set that describes locations, fact about them and the population. provide 20 of these 
 

    
 const data = [
    {
        location: "New York City",
        facts: "Known as the 'Big Apple', NYC is famous for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
        population: 8419600
    },  
    {
        location: "Los Angeles",
        facts: "Home to Hollywood, LA is the entertainment capital of the world, known for its beaches, theme parks, and diverse culture.",
        population: 3976322
    },
    {
        location: "Chicago",
        facts: "Known as the 'Windy City', Chicago is famous for its deep-dish pizza, architecture, and vibrant arts scene.",
        population: 2716000
    },
    {
        location: "Houston",
        facts: "Houston is the largest city in Texas and a major space center, home to NASA's Johnson Space Center.",
        population: 2320268
    },
    {
        location: "Phoenix",
        facts: "Phoenix is known for its desert climate, beautiful sunsets, and as the home of the Arizona Cardinals.",
        population: 1680992
    },
    {
        location: "Philadelphia",
        facts: "Known for its rich history, Philadelphia is home to Independence Hall, the Liberty Bell, and the Rocky Steps.",
        population: 1584138
    },
    {
        location: "San Antonio",
        facts: "San Antonio is famous for the Alamo, its vibrant culture, and the River Walk.",
        population: 1547253 
    },
    {
        location: "San Diego",
        facts: "San Diego is known for its beautiful beaches, the San Diego Zoo, and its mild climate.",
        population: 1423851
    },
    {
        location: "Dallas",
        facts: "Dallas is a major city in Texas known for its cultural activities, sports teams, and as a business hub.",
        population: 1345047 
    },
    {
        location: "San Jose",
        facts: "San Jose is the heart of Silicon Valley, known for its tech industry and innovation.",
        population: 1035317
    },
    {
        location: "Austin",
        facts: "Austin is known for its live music scene, tech industry, and vibrant culture.",
        population: 964254
    },
    {
        location: "Jacksonville",
        facts: "Jacksonville is known for its beautiful beaches, the Jacksonville Zoo, and its growing economy.",
        population: 949611
    },
    {
        location: "Fort Worth",
        facts: "Fort Worth is known for its Western heritage, the Stockyards, and its vibrant arts scene.",
        population: 927720
    },
    {
        location: "Columbus",
        facts: "Columbus is known for its growing tech industry, the Ohio State University, and its vibrant downtown.",
        population: 905748
    },
    {
        location: "Charlotte",  
        facts: "Charlotte is a major financial hub, known for its banking industry and vibrant culture.",
        population: 885708
    },
    {
        location: "San Francisco",
        facts: "San Francisco is known for its iconic Golden Gate Bridge, tech industry, and vibrant cultural scene.",
        population: 881549
    },
    {
        location: "Indianapolis",
        facts: "Indianapolis is known for the Indianapolis 500, its sports teams, and its vibrant arts scene.",
        population: 876384
    },
    {
        location: "Seattle",
        facts: "Seattle is known for its tech industry, the Space Needle, and its vibrant music scene.",    
        population: 753675
    },
    {
        location: "Denver",
        facts: "Denver is known for its outdoor activities, the Rocky Mountains, and its growing tech scene.",
        population: 716492
    },
    {
        location: "Washington D.C.",
        facts: "Washington, D.C. is the capital of the United States, known for its historic landmarks, museums, and government buildings.",
        population: 702455
    }]

    export async function locations(){
        return data;
    }


    export function headerAndStatusCodeAndPayload(res,statusCode,payload){
        res.setHeader('Content-Type','application/json');
        res.statusCode = statusCode;
        res.end(JSON.stringify(payload));
    }
    

