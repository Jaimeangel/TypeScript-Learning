(() => {
  //any = whatever data type could be here
  let myDynamicVar: any;

  // The varaible with the `any` data type can be assigned any value
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar ='';

  // To convert from one data type to another

  // Using `as` operator
  myDynamicVar = 'Hola';
  // Now, the variable below `rta` has string properties.
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  // Using `Angle bracket`
  myDynamicVar = 1212;
  // Now, the variable below `rta2` has number properties.
  const rta2 = (<number>myDynamicVar).toFixed();
  // const rta2 = (myDynamicVar as number).toFixed()
  console.log(rta2);

})();
