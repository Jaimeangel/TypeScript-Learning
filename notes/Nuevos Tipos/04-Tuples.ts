(()=>{
  type StringNumberPair = [string, number];
  const hardArray:StringNumberPair=['string',23]
  const zeroIndex = hardArray[0]
  const firstIndex = hardArray[1]
  //you can add other element if type of it allows in tuple
  hardArray.push('string')
  //However not possible acces index out of the range !NOT SENSE DO IT ABOVE¡
  // const anotherIndex = hardArray[2]
  console.log(hardArray)
  console.log(zeroIndex)
  console.log(firstIndex)
  // This thrown an error in console
  // console.log(anotherIndex)

  // destructuration using javascript
  function doSomething(stringHash: StringNumberPair) {
    const [inputString, hash] = stringHash;

    console.log(inputString);

    //const inputString: string

    console.log(hash);

    // const hash: number
  }
  doSomething(['aqui va todo el string',12313123])


  // optional values
  // by writing out a question mark you can pass an optional values
  type Either2dOr3d = [number, number, number?];

  function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;

    // const z: number | undefined

    console.log(`Provided coordinates had ${coord.length} dimensions`);

    //(property) length: 2 | 3
  }

  setCoordinate([23,45])
  setCoordinate([23,45,56])

  // read only properties
  function doSomething2(pair: readonly [string, number]) {
    pair[0] = "hello!";
    //Cannot assign to '0' because it is a read-only property.
  }
})()
