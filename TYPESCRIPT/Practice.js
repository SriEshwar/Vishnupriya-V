// Any
var variable = 10;
variable = 'Hello';
variable = true;
console.log(variable);
// Tuple
var tuple = [10, 'Hello'];
console.log(tuple);
// Unknown
var unknownValue = 10;
console.log(unknownValue);
// Never
function throwError(message) {
    throw new Error(message);
}
// Enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var userDirection = Direction.Up;
console.log(userDirection);
// Functions
function add(x, y) {
    return x + y;
}
console.log(add(5, 3));
// Array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Set
var uniqueNumbers = new Set([1, 2, 3, 4, 5]);
console.log(uniqueNumbers);
// List (Array)
var listOfStrings = ['Apple', 'Banana', 'Orange'];
console.log(listOfStrings);
// Map
var keyValueMap = new Map();
keyValueMap.set('one', 1);
keyValueMap.set('two', 2);
console.log(keyValueMap);
