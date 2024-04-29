//array
let marks = [98,89,90,98,100]
console.log(marks)
console.log(marks[1])
console.log(marks.length)

//mixed array
let input = ["VISHNU",1234567890,21,"abc@gmail.com",[98,89,90,98,100] ]
console.log(input)
console.log(input[4][3])

//array method
//push - adds element to the end of the array and returns new length
input.push("coimbatore") 
console.log(input)

//pop - removes element to the end of the array and returns removed value
console.log(input.pop() )
console.log(input)

//shift - removes element from the start of the array and returns the removed value
console.log(input.shift()) 
console.log(input)

//unshift - adds element from the start of the array and returns the new length
console.log(input.unshift("VISHNU")) //5
console.log(input)

//delete - removes the element at the given index
console.log(delete input[2])
console.log(input[2]) //undefined

//splice 
input.splice(2,1) //splice(startindex,length)
console.log(input)
//replcae element using splice after deleting element
input.splice(2,1,"vIl") //splice(startindex,length,value to be inderted)
console.log(input)
////replcae element using splice without deleting element
input.splice(2,0,"vI") //splice(startindex,length,value to be inderted)
console.log(input)

//slice
//retrieve element from specifice set of index
//sytax : splice(start index, end index)
//does not include ending index i.e endind-1
console.log(input.slice(1,3)) 
console.log(input.slice(-4)) 

//reverse
console.log(input.reverse())

//join - converts array to string
console.log(input.join())

//split - converts string to array
var string = "a,b,c,d,e"
console.log(string.split(","))

//concat and spread operator
let personal_details=["VISHNU",27,"abc@email.com"]
let course_details=["javascript","nodejs","expressjs"]
let jointArray = [personal_details,course_details]
console.log(jointArray) // returns 2 dimensional array
console.log(personal_details.concat(course_details)) // returns 1 dimensional array
console.log([...personal_details,...course_details]) // returns 1 dimensional array



