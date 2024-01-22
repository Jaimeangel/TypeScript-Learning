(() => {
  const login =(data:{email:string,password:number})=>{
    console.log(data.email,data.password);
  }

  // login ("nico@nico.co","12121212");
  login({
    email:"nico@nico.co",
    password:12121212
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products:any[]=[];

  const addProduct=(data:{
    title:string,
    createdAt:Date,
    stock:number;
    size?:Sizes
  }) =>{
    products.push(data);
  }

  addProduct({
    title:"pro1",
    createdAt:new Date(1993,1,1),
    stock:12
  });
  console.log(products);

  addProduct({
    title:"pro1",
    createdAt:new Date(1993,1,1),
    stock:12,
    size:"XL"
  });
  console.log(products);

  // We can create our own customized type.
  type product={
    title:string,
    createdAt:Date,
    stock:number;
    size?:Sizes
  };

  const products2:product[]=[];

  products2.push({
    title:"Prod3",
    createdAt:new Date(1992,1,1),
    stock:12,
    size:"XL"
  })

  products2.push({
    title:"Prod3",
    createdAt:new Date(1992,1,1),
    stock:12,
  })

  // This customized type allows only objects with specific attributes.
  products2.push({
    stock:12,
  })
})();
