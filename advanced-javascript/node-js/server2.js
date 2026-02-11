import http from "node:http";
import { locations } from "./db.js";
import { headerAndStatusCodeAndPayload } from "./db.js";


const server2 = http.createServer(async (req, res) => {
  const population = await locations();

  if (req.url === "/" && req.method === "GET") {
    headerAndStatusCode(res,200,population);
    
  } 
  else if (req.url === "/location" && req.method === "GET") {
    const location = req.url.split("/")[3];
    const city = population.filter(
      (city) => city.location.toLowerCase() === location.toLowerCase(),
    );
    headerAndStatusCode(res,200,city);
  }
});

const PORTR = 5000;

server2.listen(PORTR, () => {
  console.log(`Server is running on port ${PORTR}`);
});
