# What is `any`?

`any` is a data type in TypeScript that essentially means the variable declared with this data type can hold values of any type. It removes type analysis. `any` data type desactived TypeScript typed, returning to JS way.

## Usage
It can be used for greater flexibility, but there are better ways to achieve the same.

It is advised not to use `any` in well-established projects and in development teams experienced with TypeScript. In the case of migrating projects from JavaScript to TypeScript, the use of `any` might be allowed.

## TypeScript
It's meant to be used incrementally. In other words, for systems or applications where TypeScript is being gradually implemented, the `any` type might be allowed. It can be beneficial for the initial steps in project migration.

## Casting
Changing the type of data from one to another. We can convert from `any` data type to any other data type using the as operator.

### as Keyword
We can define how a data type should be treated. We tell TypeScript to trust our typing and treat that variable as the specified data type.

```ts
  (variableName as dataType)
```
### Angle bracket
Es lo mismo que as pero con otra sintaxis.
```ts
  (<dataType>variableName)
```
