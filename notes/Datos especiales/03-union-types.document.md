# Union Types

- TypeScript allows defining a variable with multiple data types using Union Type.
- When declaring the Union Type, use the pipe '|' symbol between the data types.
- The declaration must be explicit; we have to write every data type used in the Union type.
- TypeScript allows using as many data types as needed in the Union Type.

## Sintaxis

### Variables

```ts
  let variableName: dataType1 | dataType2 | ...| dataTypeeN = value;
```
### Function parameters

```ts
  function funtionName (parameter: dataType1 | ... | dataTypeN):dataTypeReturn{
		statements
  }
```
### Arrow function

```ts
  const functionName = (parameter: dataType1 | ... | dataTypeN): dataTypeReturn => {
		statements
  }
```
