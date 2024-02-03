# Enums

Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera.

Se recomiendo nombrar al enum en mayúscula.

```ts
  enum ROLES {
    ADMIN = "admin",
    USER = "user",
    OWNER = "owner"
  }
```

## Diferencias entre enum y literal types:


- Asignación de valores, por ejemplo los parámetros de una función:

```ts
  enum Estaciones {
    primavera = "Primavera",
    verano = "Verano",
    otonio = "Otoño",
    invierno = "Invierno",
  }
  const favEstacion = (est: Estaciones): string => {
    return `Mi estación fav es: ${est}`;
  };

  console.log(favEstacion("verano")); //❌ no se puede mandar un string suelto
  console.log(favEstacion(Estaciones.verano)); //✅tenemos que ser mas especificos

  //Son mas validos como herramientas para el desarrollador que para el usuario final
```
Con un enum tenemos que ser mas específicos al momento de llamar a sus valores, no podemos acceder a ellos como si fuera una simple cadena.

- Con un literal type esto es mucho mas sencillo:

```ts
  type Estaciones = "Primavera" | "Verano" | "Otoño" | "Invierno";

  const favEstacion = (est: Estaciones): string => {
    return `Mi estación fav es: ${est}`;
  };
  console.log(favEstacion("Primavera")); // ✅ Podemos usar los argumentos como si fuera js nativo
  **Código compilado: **
  Con literal types el código compilado es mas sencillo:
  "use strict";
  const favEstacion = (est) => {
      return `Mi estación fav es: ${est}`;
  };
  console.log(favEstacion("Primavera")); // ✅ Podemos usar los argumentos como si fuera js nativo
```
