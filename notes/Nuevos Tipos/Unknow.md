# Unknown type

Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.
```ts
  let foo: unknown = null;
```
- ¿Qué hace?
Este nos dice que la variable es desconocida, es similar a any, pero es la forma recomendable de trabajar para evitar any en los casos que sean necesarios.

- Diferencias con any
Con any podemos hacer lo que queramos, no hay restricción alguna, pero con unknown vamos a tener advertencias al momento de usar alguna función o método con variables de tipo unknown.

Para poder pasar las advertencias tenemos que usar un filtro o realizar una verificación, una estructura condicional, para poder hacer lo que queremos con esa variable.

- Recomendación
Utilizar unknown siempre por sobre any, pero solo en caso de que sea necesario.
