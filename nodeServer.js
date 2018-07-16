const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const fs = require('fs');

http.createServer((req,res)=>{
	if (req.url ==='/' || req.url === '/home'){
		fs.readFile('home.html', (err, data)=>{
			if(err){
				res.writeHead(404, {'Content-Type' : 'text/html'});
				return res.write("404 Content not found!!!");
			}
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write(data);
			res.end();
		})
	}
	if (req.url === '/about'){
		fs.readFile('about.html', (err, data)=>{
			if(err){
				res.writeHead(404, {'Content-Type' : 'text/html'});
				return res.write("404 Content not found!!!");
			}
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write(data);
			res.end();
		})
	}
	if (req.url ==='/' || req.url === '/contact'){
		fs.readFile('contact.html', (err, data)=>{
			if(err){
				res.writeHead(404, {'Content-Type' : 'text/html'});
				return res.write("404 Content not found!!!");
			}
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write(data);
			res.end();
		})
	}
}).listen(port, hostname, ()=>{
	console.log(`Server is Running on port ${port}...`);
});