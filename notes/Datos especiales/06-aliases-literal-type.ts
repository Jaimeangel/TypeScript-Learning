(()=>{
  // Type Aliases

  // TypeScript allows the definition of an 'alias' that can be used in any flow of code.
  type UserID = string | number | boolean;
  let userId: UserID;

  type Point = {
    x: number;
    y: number;
  };

  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }

  printCoord({ x: 100, y: 100 });

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

  function greeting(userId: UserID, size: Sizes | 'XS'){
    console.log(userId,size)
  }

  greeting('jaimeRx345','S');
  greeting('antony56','XL');
  greeting('JUAN3Y_U56','XS');

  // But by combining literals into unions, you can express a much more useful concept
  // for example, functions that only accept a certain set of known values:
  function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
  printText("G'day, mate", "centre");

  // Numeric literal types work the same way:
  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  })();
