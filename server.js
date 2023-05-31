const http = require('http')
const fs = require('fs')

function onRequest (req, res) {
    res.writeHead(200,{ "Content-Tpe" : "text/html"})
    fs.readFile('./index.html', 'utf-8', function (err, data){
        if(err){
            res.writeHead(404)
            res.write('File not found !')
            console.log(err.message)
        }else{
            res.write(data)
            console.log('program running on 8001')
        }
        res.end();
    })
}

http.createServer(onRequest).listen(8001)