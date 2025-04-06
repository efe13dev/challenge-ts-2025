# Split the Bill 💰

## Descripción del Problema

Estás en un restaurante con tus amigos y es hora de irse, pero hay un gran problema... ¡la cuenta! ¿Quién pagará qué? Por suerte, ¡tienes tu computadora a mano! Una simple función y la cuenta se paga —de manera justa, además!

## La Tarea

La función debe tomar un parámetro: un objeto/diccionario con dos o más pares nombre-valor que representan a los miembros del grupo y la cantidad gastada por cada uno.

Tu función debe devolver un objeto/diccionario con los mismos nombres, mostrando cuánto dinero deben pagar o recibir los miembros.

## Puntos Adicionales:

* Los valores deben ser números positivos si la persona debe recibir dinero del grupo, números negativos si deben dinero al grupo.
* Si el valor es un decimal, redondea a dos decimales.
* ¡Traducciones y comentarios (y votos positivos) son bienvenidos!

## Ejemplo

3 amigos salen juntos: A gasta £20, B gasta £15 y C gasta £10. La función debe devolver un objeto/diccionario mostrando que A debe recibir £5, B debe recibir £0 y C debe pagar £5.

```javascript
var grupo = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(grupo) // devuelve {A: 5, B: 0, C: -5}