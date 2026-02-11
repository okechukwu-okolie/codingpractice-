import http from "http";
import { locations } from "./db.js";

const server = http.createServer(async (req, res) => {
  const population = await locations();

  const destination = population
    .filter((city) => city.location.toLowerCase().includes("new"))
    .map((city) => ({
      location: city.location,
      facts: city.facts,
      population: city.population,
    }));

  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(destination));
  }
   else if (req.url.startsWith("/location/") && req.method === "GET") {
    const location = req.url.split("/")[3];
    const city = population.filter(
      (city) => city.location.toLowerCase() === location.toLowerCase(),
    );
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(city));
  }else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "notfound",
        message: "The requested route does not exist",
      }),
    );
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


