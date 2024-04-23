var express=require('express')
var server =express();
var passengerName;
// server.use(airportTerminal);
function getPassengerName(request,response,next){
    passengerName=request.query['passenger'];
    if(passengerName=='vishnu')
     next()
else{
    response.send("<h1>Enter Valid Name</h1>");
}
}
function getPassword(request,response,next){
    var password=request.query['password'];
    if(password=='vishnu1403')
    next()
else{
    response.send("<h1>invalid password </h1>")
}
}
function getPhoneNumber(request,response,next){
    var phoneNumber=request.query['phonenumber']
    if(phoneNumber.length>9){
        next();
    }
    else{
        response.send('Invalid phone number')
    }
}
server.get("/targetflight",getPassengerName,getPassword,getPhoneNumber,(request,response)=>{
response.send("<h1> Welcome " +passengerName+ " !!!</h1>")
})
server.get("/viptargetflight",(request,response)=>{
response.send("<h1> Welcome " + " !!!.Happy begining</h1>")
})
server.listen(5000,()=>{
    console.log("Waiting..")
})