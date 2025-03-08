# Problema del Vendedor Viajero

## Descripción

Un vendedor viajero debe visitar a sus clientes. Tiene las direcciones de cada cliente, por ejemplo: "432 Main Long Road St. Louisville OH 43071", en una lista.

El formato básico del código postal generalmente consta de dos letras mayúsculas seguidas de un espacio en blanco y cinco dígitos. La lista de clientes a visitar se entrega como una cadena de texto con todas las direcciones, separadas entre sí por comas, por ejemplo:

```
"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"
```

Para facilitar su viaje, el vendedor quiere agrupar la lista por código postal.

## Tarea

La función `travel` tomará dos parámetros:
- `r` (lista de direcciones de todos los clientes como una cadena)
- `zipcode` (código postal a buscar)

Y devolverá una cadena en el siguiente formato:

```
zipcode:street and town,street and town,.../house number,house number,...
```

Los números de calle deben estar en el mismo orden que las calles a las que pertenecen.

Si un código postal dado no existe en la lista de direcciones de los clientes, devuelve `"zipcode:/"`.

## Ejemplos

```
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
```

## Notas

- Para Elixir: En Elixir, la entrada de direcciones vacías es una lista vacía, no una cadena vacía.
- Puedes ver algunas direcciones y códigos postales en los casos de prueba.