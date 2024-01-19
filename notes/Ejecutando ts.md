# Compilation/Transpilation in TypeScript

For more information on the functioning of the TypeScript compilation/transpilation process, you can learn more at this [link](https://www.geeksforgeeks.org/how-typescript-compilation-works/).

## Compiling TypeScript

After creating a file with the ".ts" extension, it must be compiled using the command line.

```bash
npx tsc src/demoType.ts --target es6 --outDir dist
```

- npx tsc src/demoType.ts: Specifies the ".ts" file location.
- --target es6: Specifies that we want to compile the code into a specific ECMAScript version.
- --outDir dist: Specifies that we want the transpilation result to be saved in a specified folder.

## Initializing tsconfig.json

To initialize the tsconfig.json file, we use the following command:

```bash
  npx tsc --init
```
This command generates a file named tsconfig.json, which contains all the information related to TypeScript configuration. Within this file, we can set rules that were previously specified via the command line.

For this case, we modify the tsconfig.json file with the following configurations:

- "outDir": "./dist": Specifies the location of the output file.
- "rootDir": "./src": Specifies the location of the input files.

After completing the configuration, you can run the TypeScript compiler using the following command:
```bash
  npx tsc
```

## Continuous Observation

By using the following command, we can enable continuous compilation, preventing the need to manually recompile every time:

```bash
  npx tsc --watch
```
This continuous observation command ensures that TypeScript monitors the files for changes and automatically recompiles them as needed.




