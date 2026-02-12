import http from 'node:http';


const server = http.createServer((req, res) => {
  if(req.url.startsWith('/data/locations') && req.method === 'GET' ) {
    // res.setHeader('Content-Type', 'application/json');
    // res.statusCode = 200;
    res.writeHead(200,{ 'Content-Type': 'application/json' });
    res.write('we are working with data endpoint\n');
    res.write(req.url);
    res.end('\nData end point exists\n',()=>{
        console.log('Response sent successfully');
    });
    console.log(req.url)
  }
  else{
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// 
const PORT = 4000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});