// Any
let variable: any = 10;
variable = 'Hello';
variable = true;
console.log(variable);

// Tuple
let tuple: [number, string] = [10, 'Hello'];
console.log(tuple);

// Unknown
let unknownValue: unknown = 10;
console.log(unknownValue);

// Never
function throwError(message: string): never {
    throw new Error(message);
}

// Enum
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

let userDirection: Direction = Direction.Up;
console.log(userDirection);

// Functions
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(5, 3));

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Set
let uniqueNumbers: Set<number> = new Set([1, 2, 3, 4, 5]);
console.log(uniqueNumbers);

// List (Array)
let listOfStrings: string[] = ['Apple', 'Banana', 'Orange'];
console.log(listOfStrings);

// Map
let keyValueMap: Map<string, number> = new Map();
keyValueMap.set('one', 1);
keyValueMap.set('two', 2);
console.log(keyValueMap);

