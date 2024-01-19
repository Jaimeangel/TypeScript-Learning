(()=>{
  let isEnable = true;
  console.log(isEnable)
// In this case, TypeScript throws an error because when initializing the variable above,
// TypeScript infers its type as boolean.
/*   isEnable = 'helicopetero'
  isEnable = 34 */
  // The variable can only be reassigned to another boolean value.
  isEnable = false
  console.log(isEnable)

  let isNew: boolean = false;
  console.log(isNew)

  const random = Math.random()
  //TypeScript not only work when the assigned variable is direct
  //In the workflow, TypeScript is always watching for a correct type of the variable
  /* isNew = random > 0.5 ? true : 'false' */
  isNew = random > 0.5 ? true : false
  console.log(isNew)
})()
