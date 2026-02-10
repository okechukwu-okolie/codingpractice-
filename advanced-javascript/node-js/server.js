import http from 'http';
import { getStudents } from './db.js';



const server = http.createServer(async (req, res)=>{
    const destination = await getStudents();

    if(req.url === '/aa' && req.method === 'GET'){
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(destination));
    } else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({error:'notfound', message: "The requested route does not exist"}));
    }
 
})


const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})