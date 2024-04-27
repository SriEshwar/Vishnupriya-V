const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'FileSystem','start.txt'),'utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
fs.writeFile(path.join(__dirname,'FileSystem','create.txt'),'Write a file.....',(err)=>{
    if(err) throw err
    console.log('Write file completed ')
}) 
fs.appendFile(path.join(__dirname,'FileSystem','create.txt'), 'Appending a file...',(err)=>{
    if(err) throw err
    console.log('Append a file completed ')
}) 

 fs.rename(path.join(__dirname,'FileSystem','create.txt'),path.join(__dirname,'FileSystem','rename.txt'),(err)=>{
    if(err) throw err
    console.log('Rename a file completed ')
}) 

process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error :${err}`)
    process.exit(1)
})