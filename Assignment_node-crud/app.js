//define port
const http = require('http');
const port = 1111;
const fs = require('fs');

//create webpage
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html> <title> File handling </title> <body style="background:lightCyan; font-size:large;"> <h1 style="color:cadetblue; font-family:Cursive;"> Performing operations </h1> <a style="margin:14px; background:blue; color:white;" href="/createFile" >Create File</a> <a href="/readFile" style="margin:14px; background:blue; color:white;">Read File</a> <a style="margin:14px; background:blue; color:white;" href="/updateFile" >Update File</a> <a style="margin:14px; background:blue; color:white;" href="/deleteFile" >Delete File</a></body></html>')
        res.end();
    }
    else if(req.url === '/createFile'){
        //checking if the file exists or not. If exists, then okay. Otherwise a file named as neosoft.txt is created.
        if(fs.existsSync("neosoft.txt")){
            res.end("File created");
        }
        else {
            fs.writeFile("neosoft.txt", "Welcome to NeoSOFT!", (err) => {
                if (err) throw err;
                res.end('File Created');
            })
        }
    }
    else if(req.url === '/readFile'){
        //
        if(fs.existsSync('neosoft.txt')){
            let data = fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else {
            res.end("File does not exist");
        }
    }

    else if(req.url === '/updateFile'){
        //
        if(fs.existsSync('neosoft.txt')){
            fs.appendFile("neosoft.txt", "Neosoft technologies private limited.", (err) => {
                if(err) throw err;
                else res.end("File is appended");
            })
        }
        else {
            res.end("<h1> File does not exist </h1>");
        }
    }

    else if(req.url === '/deleteFile'){
        //
        if(fs.existsSync('neosoft.txt')){
            fs.unlink('neosoft.txt', err => {
                if (err) throw err;
                else res.end("File got deleted");
            });
        }
        else {
            res.end("File does not exist");
        }
    }
    else {
        res.end("<h1> 404 Page Not Found </h1>")
    }
})

server.listen(port, err => {
    if(err) throw err;
    else console.log(`Server is work on ${port}`);
})