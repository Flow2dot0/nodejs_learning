require('babel-register');

const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    if(req.url == '/') {
        resp.writeHead(200, {
            'Content-type': 'text/html'
        })
        resp.write("<h1>Accueil<h1/> \n");
        resp.end()
    }


    if(req.url == '/text') {

        fs.readFile("text.txt", 'utf-8', (err, data) => {
            if(err) {
               send404(resp)
            } else {
                resp.writeHead(200, {
                    'Content-type': 'text/html'
                })
                resp.write(data);
                resp.end()
            }
        })

    } else {
        send404(resp)
    }
}).listen(8080);

function send404(resp) {
    resp.writeHead(404, {
        'Content-type': 'text/html'
    })
    resp.write("<span style='color: red'>error 404<span/>");
    resp.end()
}



// const fs = require('fs');
//
// fs.readFile('text.txt', "utf-8", (err, data) => {
//     if(err)
//         console.log(err);
//
//     console.log(data);
//
//     fs.writeFile('text.txt', "Hello World", "utf-8", (err) => {
//         if(err)
//             console.log(err);
//
//         fs.readFile('text.txt', "utf-8", (err, data) => {
//             if(err)
//                 console.log(err);
//
//             console.log(data);
//         });
//     });
// });
// console.log();

// require("fs")
//
// require('http')
