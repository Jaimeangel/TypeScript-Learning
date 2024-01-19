(()=>{
  // Allow TypeScript to infer the type of the variable.
  let productPrice = 200;
  productPrice = 40;
  // If we assign a string to the above variable, TypeScript will throw an error.
  /* productPrice = 'jaime' */
  console.log('product price',productPrice)

  let customerAge: number = 35;
  //Typescript will throw an error.
  /* customerAge = customerAge + '1' */
  customerAge = customerAge + 1
  console.log('customer age',customerAge)

  let productInStock:number;
  //TypeScript will throw an error because we haven't assigned any value to the variable.
  /* console.log('productInStock',productInStock) */
  console.log(productInStock)
  let discount = parseInt('456')
  // In this case, the parseInt method must return a number, but since a string is passed, the result is NaN.
  // IMPORTANT: NaN is represented as a number as well.
  discount = parseInt('adsadasdas')
  console.log('discount',discount)

})()
