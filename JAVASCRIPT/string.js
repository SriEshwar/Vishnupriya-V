let firstname="vishnu "
let lastname="priya"
//string concatenation
console.log(firstname+lastname)
console.log(firstname.concat(lastname))
console.log(firstname.concat(" ",lastname))

//partitoning string
//1. slice
console.log(lastname.slice(2,4)) //slice(start,end)
console.log(lastname.slice(4))
console.log(lastname.slice(-5))

//2. substring
console.log(lastname.substring(2,4)) //substring(start,end)

//3. substr
console.log(lastname.substr(2,4)) //substr(start,length/no of characters)

//replace string
console.log(lastname.replace("vishnu","Vishnu"))
// *replace - will only replace first appearance of give string
// *replaceall - replaces all the appearance of the given string

//upper and lower
console.log(lastname.toUpperCase())
console.log(lastname.toLowerCase())

//length - property
console.log(lastname.length)

//trim - delete unwanted spaces
console.log(firstname.trim())
console.log(firstname.trimStart())
console.log(firstname.trimEnd())

//PAD
console.log(firstname.padEnd(lastname.length,"0"))
console.log(firstname.padStart(lastname.length,"0"))

//particular character from a string
console.log(lastname[0]) //stringname[index]
console.log(lastname.charAt(0))
console.log(lastname.charCodeAt(0)) //returns unique code of that perticular character

//to find index
console.log(firstname.indexOf("a"))
console.log(firstname.indexOf("r"))

//to find string 
console.log(lastname.search("gopal")) //return index
console.log(lastname.includes("gopal")) //return boolean - true
console.log(lastname.startsWith("v")) //return boolean -  true
console.log(lastname.endsWith("f")) //return boolean - false

//execise
//print random character from the input string
let input_string="Welcome to the page"
var length=input_string.length
console.log(input_string.charAt(Math.random()*length))