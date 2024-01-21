# Type Aliases

- TypeScript allows you to create an 'alias' using the reserved word 'type'.
- Type aliases allow the use of union types.
- Another key feature of type aliases is the ability to avoid redundancy in type names.
- Using type aliases as another data type.

```ts
  type TypeName = datatype1 | datatype2 | ... | datatypeN;
  let userName: TypeName;
```
# Literal Types

- A literal types type can contain a set of strings.
- The syntax for literal types consists of strings as types separated by the pipe symbol '|' between them.
- Literal Types are customized types.
- Literal Types can be used to represent a set of options.

```ts
  type TypeName = 'datatype1'| 'datatype2' | ... | 'datatypeN';
  let userSize: TypeName;
```
