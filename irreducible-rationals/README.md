# Fracciones Irreducibles (Irreducible Rationals)

## Descripción del Problema

Tendrás una lista de números racionales en alguno de estos formatos:

```
lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
```
o
```
lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
```

donde todos los números son enteros positivos. Debes producir su suma N / D en forma irreducible, lo que significa que N y D solo tienen 1 como divisor común.

## Formato de Retorno

El resultado debe ser devuelto en uno de los siguientes formatos, dependiendo del lenguaje:

| Lenguaje | Formato |
|----------|---------|
| Ruby, Crystal, Python, Clojure, JS, CS, PHP, Julia, Pascal | `[N, D]` |
| Haskell, PureScript | `"N D"` |
| Java, CSharp, TS, Scala, PowerShell, Kotlin | `"[N, D]"` |
| Go, Nim | `"N/D"` |
| C, C++, Elixir, Lua | `{N, D}` |
| Rust | `Some((N, D))` |
| F#, Ocaml | `Some "N D"` |
| R | `c(N, D)` |
| Swift | `(N, D)` |
| Racket | `'(N D)` |

### Casos Especiales

1. Si el resultado es un número entero (D divide a N de manera exacta), retornar:
   - Un entero en Ruby, Crystal, Elixir, Clojure, Python, JS, CS, PHP, R, Julia
   - `Just "n"` en Haskell, PureScript
   - `"n"` en Java, CSharp, TS, Scala, PowerShell, Go, Nim, Kotlin
   - `{n, 1}` en C, C++, Lua
   - `Some((n, 1))` en Rust
   - `Some "n"` en F#, Ocaml
   - `(n, 1)` en Swift, Pascal, Perl
   - `n` en Racket

2. Si la lista de entrada está vacía, retornar:
   - `nil/None/null/Nothing` en la mayoría de lenguajes
   - `{0, 1}` en C, C++, Lua
   - `"0"` en Scala, PowerShell, Go, Nim
   - `O` en Racket
   - `""` en Kotlin
   - `[0, 1]` en C++, Pascal
   - `[0, 1]` en Perl

## Ejemplo

```
Input: [ [1, 2], [1, 3], [1, 4] ]
Output: [13, 12]

Explicación: 1/2 + 1/3 + 1/4 = 13/12
```

> **Nota**: Ver los tests de ejemplo para más casos y formatos de resultados.
