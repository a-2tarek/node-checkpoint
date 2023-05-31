const fs = require('fs')

fs.writeFile("welcome.txt","Hello Node", function(err){
    if(err) throw err;
    console.log('file created')
})
fs.readFile('./hello.txt', 'utf-8', function(err, data){
    if(err) {
        console.log(err.message)
    }
    console.log(data)
})