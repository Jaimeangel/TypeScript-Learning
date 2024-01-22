# Function in TypeScript

When it comes to using TypeScript in functions, you can leverage its type system to enhance the clarity and reliability of your code. Here are some ways TypeScript can be used in functions:

## Function Parameter Types:

Specify the types of function parameters to ensure that the correct data types are passed to the function.

```ts
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
```

## Function Return Types:

Specify the return type of a function to ensure that the function returns the expected data type.

```ts
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
```
## Optional and Default Parameters:

Use optional and default parameters to make certain parameters optional or provide default values. You can define an optional parameter, assigning an optional changing operator in the parameter

```ts
  function printMessage(message: string, repeat?: number): void {
    repeat = repeat || 1;
    for (let i = 0; i < repeat; i++) {
      console.log(message);
    }
  }
```
## Rest Parameters:
Utilize rest parameters to capture a variable number of arguments into an array.

```ts
  function concatenateStrings(...args: string[]): string {
    return args.join(' ');
  }
```
Rest parameters in TypeScript allow a function to accept an indefinite number of arguments as an array. This is useful when you want to work with an unknown number of parameters in a function. The syntax uses the ellipsis (...) followed by the parameter name, which collects all remaining arguments into an array.

Here's an example:

```ts
  function sumNumbers(...numbers: number[]): number {
      return numbers.reduce((total, num) => total + num, 0);
  }

  const result = sumNumbers(1, 2, 3, 4, 5);
  console.log(result); // Output: 15
```
This feature is particularly helpful when you don't know in advance how many arguments your function will receive. It provides flexibility and makes your code more dynamic.

## Function Overloading:
Declare multiple function signatures for a single function to handle different parameter combinations.

```ts
  function displayInfo(x: number): void;
  function displayInfo(x: string): void;
  function displayInfo(x: any): void {
      console.log(x);
  }
```
Arrow Functions:
Arrow functions can also be typed, both for parameters and return types.

```ts
  const multiply = (a: number, b: number): number => a * b;
```
