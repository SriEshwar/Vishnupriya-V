const fsPromise=require('fs').promises
const path=require('path')

const filOps=async()=>{
    try{
        const data= await fsPromise.readFile(path.join(__dirname,'FileSystem','start.txt'),'utf8')
            console.log(data)
        await fsPromise.writeFile(path.join(__dirname,'FileSystem','create.txt'),'Write a file.....')
            console.log('Write file completed ')
        await fsPromise.appendFile(path.join(__dirname,'FileSystem','create.txt'), 'Appending a file...')
            console.log('Append a file completed ')
        await fsPromise.rename(path.join(__dirname,'FileSystem','create.txt'),path.join(__dirname,'FileSystem','rename.txt'))
            console.log('Rename a file completed ')
        await fsPromise.unlink(path.join(__dirname,'FileSystem','rename.txt'))
            console.log('Delete a file completed ')

    }
    catch(err){
        console.error(err)

    }
}
filOps();

process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error :${err}`)
    process.exit(1)
})