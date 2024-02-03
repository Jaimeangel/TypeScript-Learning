(() => {
  const prices = [1,2,3,4,5,6, 'hola', true];


  prices.push(12313131);
  let products = ['hola', true];
  products.push(false);

  //When writing booleans, numbers, and strings, it must be done explicitly.
  const mixed: (number | string | boolean)[] = ['hola', true];
  //now, you can push number,string or boolean
  mixed.push(12);
  mixed.push(true)
  mixed.push('accepted')
   //Not possible do it
  // mixed.push({hola:1})

  let numbers = [1,2,3,4,5,6,7,8];
  numbers.map(item => item * 2);
  console.log(numbers);

  //summary

  // When building an array containing only numbers
  const pares = [2,4,6,8,10,12,14,16]
  // TypeScript infers the TypeScript Type as number[].
  const paresEx: number[] = [2,4,6,8,10,12,14,16]
  // When building an array with multiple data types, such as:
  const arraMult =  [1, true, "str"]
  // TypeScript infers it in the following way:
  const arraMultInfer: (number | boolean | string)[] = [1, true, "str"]

})();
