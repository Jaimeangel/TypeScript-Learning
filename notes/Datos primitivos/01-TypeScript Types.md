# TypeScript types

In TypeScript, types are a powerful feature that allows you to define the shape and structure of your data. TypeScript is a superset of JavaScript that introduces static typing, enabling developers to specify the types of variables, function parameters, and return values. This helps catch potential errors during development and provides better tooling support.

If you want to find out more information about this topic, review TypeScript documentation
[link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html).

## Common ways to specify types
### Basic Types:
Use keywords like number, string, boolean, undefined, and null to define basic types.
```ts
  let age: number = 25;
  let name: string = "John";
  let isActive: boolean = true;
  let data: null = null;
  let info: undefined = undefined;
```
### Arrays:
Use square brackets with the type of the array elements.
```ts
  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["John", "Jane", "Doe"];
```
## type inference

In TypeScript, type inference is a powerful feature that allows the compiler to automatically deduce the types of variables based on their usage and assignments. TypeScript uses a static type system, but you often don't need to explicitly specify the types of every variable or expression; instead, the type checker infers types whenever possible.

```ts
  let age = 25;  // Inferred as number
  let name = "John";  // Inferred as string
  let numbers = [1, 2, 3, 4, 5];  // Inferred as number[]
```

