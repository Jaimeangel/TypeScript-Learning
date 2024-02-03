# Tuples in TS
Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera

 ```ts
  const user: [string, number, boolean] = ["Irving", 20, true]
 ```

Another thing you may be interested in is that tuples can have optional properties by writing out a question mark (? after an element’s type). Optional tuple elements can only come at the end, and also affect the type of length.

 ```ts
    type Either2dOr3d = [number, number, number?];

    function setCoordinate(coord: Either2dOr3d) {
      const [x, y, z] = coord;

      //const z: number | undefined

      console.log(`Provided coordinates had ${coord.length} dimensions`);
      // (property) length: 2 | 3
    }
 ```

## readonly Tuple Types

One final note about tuple types - tuple types have readonly variants, and can be specified by sticking a readonly modifier in front of them - just like with array shorthand syntax.

 ```ts
    function doSomething(pair: readonly [string, number]) {
      pair[0] = "hello!";
      // Cannot assign to '0' because it is a read-only property.
    }
 ```
