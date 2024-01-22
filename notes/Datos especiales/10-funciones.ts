(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
   return {
        title,
        createdAt,
        stock,
        size
    }
  }

  const producto1 = createProductJson("P1", new Date(),12,"XL");
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
  console.log(producto1.size);

  const createProductJsonV2=(
    title: string,
    createdAt: Date,
    stock: number,
    // In this case, Optional changing was assigned to thesize parameter. Thats allows that size parameter to be optional
    size?: Sizes
  ) => {
   return {
        title,
        createdAt,
        stock,
        size
    }
  }

  const producto2 = createProductJsonV2("P1", new Date(),12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);

  //You can defining a type output [string, number, boolean]
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const calcTotal2 = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  // If you do not define an output type, the default type 'void' will be assigned.
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    const rt2 = calcTotal2(prices);
    console.log(`El total es ${rta}`);
    console.log(`El total es ${rt2}`);
  }

  printTotal([1, 2, 3, 5, 6]);

})();
