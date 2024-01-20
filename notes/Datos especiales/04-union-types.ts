(()=>{
  let userId: string | number;

  userId = 23154;
  userId = 'hola';

  function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 });

  function greeting(myText: string | number){
  // If the parameter is a string, act as a string; otherwise, if the parameter is a number, act as a number.
  if(typeof myText == 'string'){
    console.log(`string ${myText.toLowerCase()}`)
  } else {
    console.log(`number ${myText.toFixed(1)}`)
  }

  }
  greeting('Migue');
  greeting(13.313);

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

  welcomePeople(['jaime','marcela','ricardo'])
  welcomePeople('cristiano')
})();
