function demo() {
   console.log("function is working") 
}
demo() //function calling

//function declaration
//hoisting - function definiton will move forward, no order required
var fav_food="biriyani"
var fav_player="MS Dhoni"
var fav_place="Home"
favourite() 
function favourite(){
    console.log("Favourite food: "+fav_food)
    console.log("favourite player: "+fav_player)
    console.log("favourite place: "+fav_place)
}


//using return to return the value from a function
var a=10
var b=20

function add(a,b){
   return a+b
}
var sum=add(a,b)
console.log(sum)


//recursion 
function find_factorial(input){
   if(input==1)
   return 1
return input*find_factorial(input-1)

}
console.log(find_factorial(5))



//function expression
// no hoisting occur
// display() - error(display is not a function)
var display = function(){
   console.log("function expression")
}
display()

//arrow function
let findVolume = (length,breadth,height) => {
   return length*breadth*height
}
console.log(findVolume(1,2,3))

let findFactorial = n /*one parameter, no paranthesis neede */ => {
   if(n==1)
   return 1
return n*findFactorial(n-1)
}
console.log(find_factorial(5))

let display_content = () /*no input, empty paranthesis*/ => "hello" //only one return, no need to give return keyword and {},directly value
console.log(display_content())

//Variable arguments - est parameters
let display_variable_arguments = (...args) =>{
   console.log(args)
}
display_variable_arguments(1,2,3,4,5)

function display_product(){
   console.log(arguments)
}
display_product("pen","pencil","paper")

//Generators
// It gets value one by one
function* indexGenerator () {
   let index=1
   while(true){
      yield index++ //returns the value
   }
}
var output=indexGenerator()
console.log(output.next().value)
console.log(output.next().value)

//prompt
// let age = prompt('what is your age?')
// if(age>=18){
//    console.log("you are eligible for voting")
// }
// else{
//    console.log("not eligible for voting")
// }


//callback function
function addition(a,b){
   let sum=a+b
   console.log("sum : "+sum)
}
function substraction(a,b){
   let difference=a-b
   console.log("difference : "+difference)
}
function calculator(callback){
   callback(3,3)
}

calculator(addition)

//forEach
let list_of_course=["javascript","nodejs","expressjs"]
list_of_course.forEach(print = (val) =>{
   console.log(val)
})






