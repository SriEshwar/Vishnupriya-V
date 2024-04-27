const fs=require('fs')
const path=require('path')

const rs=fs.createReadStream(path.join(__dirname,'FileSystem','big.txt'),{encoding:'utf8'})
const ws=fs.createWriteStream(path.join(__dirname,'FileSystem','new_big.txt'))

rs.pipe(ws)