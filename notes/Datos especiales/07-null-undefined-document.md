# Null and Undefined Types in TypeScript
In TypeScript, the null and undefined types are used to represent the absence of a value or a variable that has not been assigned a value.

## Null Type
The null type is a special type that has only one value: null. It is often used to explicitly indicate that a variable or object property is intentionally empty or has no meaningful value.

```ts
  let myVar: null = null;
```
In the example above, myVar is explicitly typed as null, meaning it can only hold the value null.

## Undefined Type

The undefined type is similar to null, but it is also the default value of uninitialized variables. When a variable is declared but not assigned a value, it is automatically assigned the undefined type.

```ts
  let myVar: undefined;
```
In the example above, myVar is of type undefined, and you can later assign a value to it.

## Nullable and Undefinedable Types

You can also use a union type to allow variables to have either a specific type or null or undefined.

```ts
  let myVar: string | null = "Hello";
  myVar = null; // Valid assignment
```
In this case, myVar can either be a string or null.

### Non-strict Null Checks

By default, TypeScript has strict null checks enabled, which means you cannot assign null or undefined to a variable unless explicitly allowed. However, you can disable strict null checks in your tsconfig.json file.

```ts
  // tsconfig.json
  {
    "compilerOptions": {
      "strictNullChecks": false
    }
  }
```
## Re-assign variables

In TypeScript, when you explicitly assign a variable with the undefined type, you can later assign it a value of any data type, just like any other variable. The undefined type simply means that the variable has been declared but not yet assigned a value.

```ts
  let myVar: undefined;
  myVar = 42;       // Valid assignment
  myVar = "Hello";  // Valid assignment
```

In the example above, myVar is initially assigned the undefined type, but you can later assign it values of different data types.

On the other hand, if you explicitly assign a variable with the null type, you can only assign it the value null. However, you can use union types to allow the variable to be assigned values of a specific type or null.

```ts
  let myVar: null = null;
  // Valid assignment with strict null checks enabled:
  myVar = null;
  // Invalid assignment with strict null checks enabled:
  // myVar = "Hello";
```
In this example, myVar is explicitly assigned the null type, and you can only assign it the value null unless you use a union type to allow other specific types.

```ts
  let myVar: string | null = "Hello";
  myVar = null;     // Valid assignment
  myVar = "World";  // Valid assignment
```
Here, myVar can be a string or null, allowing for more flexibility in assignments.

