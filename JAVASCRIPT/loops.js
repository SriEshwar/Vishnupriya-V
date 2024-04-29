//for loop
var number=5;
for(i=1;i<=number;i++){
    console.log(i);
}

//for...of
let employee_details=["vishnu",101,"abc@gmail.com"]
for(let details of employee_details){
    console.log(details)
}

//for...in
let shopping = {
    item:"dress",
    price:2000,
    //function inside object
    buy : function(){
        console.log("add to cart")
    },
    addToWishList() {
        console.log("added to wish list")
    }
}
for(let key in shopping){
    console.log(shopping[key])
}
