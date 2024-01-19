# Compilation/Transpilation in TypeScript

For more information on the functioning of the TypeScript compilation/transpilation process, you can learn more at this [link](https://www.geeksforgeeks.org/how-typescript-compilation-works/).

## Compiling TypeScript

After creating a file with the ".ts" extension, it must be compiled using the command line.

```bash
npx tsc src/demoType.ts --target es6 --outDir dist

- npx tsc src/demoType.ts: Specifies the ".ts" file location.
- --target es6: Specifies that we want to compile the code into a specific ECMAScript version.
- --outDir dist: Specifies that we want the transpilation result to be saved in a specified folder.



