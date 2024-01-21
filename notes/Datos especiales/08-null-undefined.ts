(() => {
  //TypeScript
  let myVar = null;
  let otherVar = undefined;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // It allows assigning a variable a number or null type as well.
  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = "Hola TypeScript";

  function hi(name: string | null){
    let hello = "Hola ";
    if (name) {
      hello+=name;
    } else {
      hello+= "nobody";
    }
    console.log(hello);
  }

  hi('Fabio');
  hi(null);

  // In this case, the function below works just as well as the above function.
  function hi2(name: string | null){
    let hello = "Hola ";
    hello+= name?.toLowerCase() || "nobody";
  }

  hi2('Fabio');
  hi2(null);
  })();
