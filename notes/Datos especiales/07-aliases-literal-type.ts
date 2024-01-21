(()=>{
  // Type Aliases
  // TypeScript allows the definition of an 'alias' that can be used in any flow of code.
  type UserID = string | number | boolean;
  let userId: UserID;

  // Literal Types
  // With literal types, it seems similar to type aliases, but you can define other kinds of strings.
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S'
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  // Since 'XS' is not contained in the type 'Sizes', TypeScript throws an error.
  shirtSize = 'XS'

  function greeting(userId: UserID, size: Sizes){
    console.log(userId,size)
  }

  greeting('jaimeRx345','S');
  greeting('antony56','XL');
  greeting('JUAN3Y_U56','XS');
  })();
