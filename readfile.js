const fs = require('fs')
const path = require('path')

fs.readFile('./letter.txt',{encoding:'utf-8', flag:'r'}, function(err, data){
    if(err){
        return console.log(err)
    }
    else{
        return console.log(data)
    }
})