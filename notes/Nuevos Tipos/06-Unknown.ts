//con type any se puede tomar cualquier valor
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// normalmente aqui nos marcaria un error
// pero como su Type es any, lo deja pasar
// Type any es como desactivar el tipado de TypeScript y volver a js puro
let isNew: boolean = anyVar;

// Tampoco verifica si existe el metodo o nos da sugerencias de codigo
anyVar.doSomething();
anyVar.touppercase();

// type unknown habilita los beneficios del typado de TypeScript
// Sin embargo con la "ventaja" de any de poder tomar cualquier valor
let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};


// unknowVar.doSomething();
// unknow nos permite acceder a metodos segun el tipo
// siempre y cuando verifiques que ese tipo le pertenece el metodo

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
