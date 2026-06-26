export type Level = "basico" | "avanzado";

export interface Exercise {
  id: string;
  n: number;
  level: Level;
  title: string;
  prompt: string;
  source?: string;
}

export const LEVELS: { key: Level; label: string; blurb: string }[] = [
  {
    key: "basico",
    label: "Básico",
    blurb: "Fundamentos: lógica, strings, números y arrays. Ideal para calentar.",
  },
  {
    key: "avanzado",
    label: "Avanzado",
    blurb: "Algoritmos y estructuras. Retos tipo entrevista (Google, Meta, Uber…).",
  },
];

const basico: Omit<Exercise, "id" | "level">[] = [
  { n: 1, title: "Compuerta OR", prompt: "Dados dos booleanos, devuelve true si al menos uno de los dos es true (compuerta OR)." },
  { n: 2, title: "String contiene carácter", prompt: "Devuelve true si el string contiene el carácter dado, false si no." },
  { n: 3, title: "Invertir cadena", prompt: 'Crea un programa que invierta el orden de una cadena de texto. Si le pasamos "Hola mundo" nos retornaría "odnum aloH".' },
  { n: 4, title: "Decimal a binario", prompt: "Crea un programa que se encargue de transformar un número decimal a binario." },
  { n: 5, title: "¿Empieza con prefijo?", prompt: "Dado un string text y un string prefix, devuelve true si text comienza exactamente con prefix, o false en caso contrario. La comparación es sensible a mayúsculas y minúsculas." },
  { n: 6, title: "Hello World", prompt: 'Imprime en pantalla: "Hello World".' },
  { n: 7, title: "¿Es divisible?", prompt: "Dados dos números n y divisor, devuelve true si n es divisible por divisor (sin residuo)." },
  { n: 8, title: "Celsius a Fahrenheit", prompt: "Dada una temperatura en grados Celsius, conviértela a Fahrenheit y devuelve el resultado redondeado a dos decimales." },
  { n: 9, title: "Tiempo a milisegundos", prompt: "Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos." },
  { n: 10, title: "Contar consonantes", prompt: "Escribe una función count_consonants que reciba un string y devuelva el número de consonantes que contiene. Las consonantes son todas las letras del alfabeto excepto las vocales (a, e, i, o, u). Considera mayúsculas y minúsculas. Ignora cualquier carácter que no sea una letra." },
  { n: 11, title: "Cantidad de dígitos", prompt: "Dado un número entero, devuelve la cantidad de dígitos que tiene. El signo negativo no cuenta como dígito. El número 0 tiene 1 dígito." },
  { n: 12, title: "Contar apariciones", prompt: "Dado un array de números y un valor objetivo, devuelve cuántas veces aparece ese valor en el array." },
  { n: 13, title: "Palabras únicas", prompt: "Dada una cadena de texto, retorna el número de palabras únicas que contiene. Las palabras se separan por espacios y la comparación no distingue mayúsculas de minúsculas." },
  { n: 14, title: "Valor mínimo", prompt: "Devuelve el valor mínimo de un array de números. Si está vacío, devuelve None." },
  { n: 15, title: "Próximos 30 bisiestos", prompt: "Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado. Utiliza el menor número de líneas posible." },
  { n: 16, title: "Segundo más grande", prompt: "Dado un listado de números, encuentra el SEGUNDO más grande." },
  { n: 17, title: "Binario a decimal", prompt: "Crea un programa que se encargue de transformar un número binario a decimal." },
  { n: 18, title: "Duplicar elementos", prompt: "Dado un array de números, devuelve un nuevo array con cada elemento duplicado." },
  { n: 19, title: "Vocal más repetida", prompt: "Crea una función que reciba un texto y retorne la vocal que más veces se repita. Ten cuidado con los casos especiales. Si no hay vocales puede devolver vacío." },
  { n: 20, title: "Quitar espacios (trim)", prompt: "Dado un string, devuelve una nueva cadena sin los espacios en blanco al inicio y al final." },
  { n: 21, title: "Solo positivos", prompt: "Escribe una función que reciba un array de números y devuelva solo los positivos (mayores que 0)." },
  { n: 22, title: "Pares duplicados", prompt: "Filtra los números pares de una lista y duplícalos. Devuelve el resultado como una nueva lista." },
  { n: 23, title: "Intercalar cadenas", prompt: "Dadas dos cadenas de texto, combínalas intercalando sus caracteres uno a uno. Si una cadena es más larga que la otra, los caracteres sobrantes se agregan al final del resultado." },
  { n: 24, title: "Intercalar arrays", prompt: "Dados dos arrays de cualquier tipo, devuelve un nuevo array con los elementos intercalados: primero A[0], luego B[0], después A[1], B[1], etc. Si un array es más largo, los sobrantes van al final." },
  { n: 25, title: "Intercambiar dos elementos", prompt: "Dado un array de exactamente dos elementos, devuelve un nuevo array con los valores intercambiados de posición." },
  { n: 26, title: "Invertir número de 2 cifras", prompt: "Dado un número natural de dos cifras, diseña un algoritmo que obtenga el número invertido. Ejemplo: si se ingresa 23 que muestre 32." },
  { n: 27, title: "Mejor de 4 notas", prompt: "Ingresar 4 notas de un alumno y mostrar la mejor nota." },
  { n: 28, title: "Invertir array", prompt: "Dado un array de números, devuelve una nueva lista con los elementos en orden inverso. No debes modificar la lista original." },
  { n: 29, title: "Valor máximo", prompt: "Implementa una función que reciba un array de números y devuelva el valor máximo. Si el array está vacío, devuelve None." },
  { n: 30, title: "Palabras que empiezan con vocal", prompt: "Dada una cadena de texto, cuenta cuántas palabras comienzan con una vocal (a, e, i, o, u), sin importar mayúsculas o minúsculas." },
  { n: 31, title: "¿Son anagramas?", prompt: 'Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas. Un anagrama consiste en formar una palabra reordenando TODAS las letras de otra. Ejemplo: "amor" y "roma"; "congreso" y "sogrecon".' },
  { n: 32, title: "¿Es primo?", prompt: "Escribe un programa que compruebe si un número es o no primo. Si es primo retorna True, en caso contrario False." },
  { n: 33, title: "¿Es primo? (II)", prompt: "Escribe un programa que compruebe si un número es o no primo. Si es primo retorna True, en caso contrario False." },
  { n: 34, title: "¿Es palíndromo?", prompt: "Escribe una función que reciba un texto y retorne verdadero o falso según sea o no palíndromo. Un palíndromo se lee igual de izquierda a derecha que al revés. No se tienen en cuenta espacios, signos de puntuación ni tildes. Ejemplo: «Ana lleva al oso la avellana»." },
  { n: 35, title: "MCD y mcm", prompt: "Crea una función que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros." },
  { n: 36, title: "MCD y mcm (II)", prompt: "Crea una función que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros." },
  { n: 37, title: "Suma de pares", prompt: "Dado un array de enteros, devuelve la suma únicamente de los elementos pares. Si el array está vacío o no contiene pares, devuelve 0." },
  { n: 38, title: "¿Array ordenado?", prompt: "Dada una lista de números, determina si está ordenada en orden ascendente no decreciente (cada elemento ≥ al anterior). Devuelve True si está ordenado, False si no." },
  { n: 39, title: "Vocales en índices pares", prompt: "Dada una cadena, cuenta cuántas vocales (a, e, i, o, u) aparecen en índices pares (0, 2, 4, …). La comparación es case-insensitive." },
  { n: 40, title: "¿Número de Fibonacci?", prompt: "Dado un número entero no negativo n, determina si pertenece a la secuencia de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, …). Devuelve True si lo es, False si no." },
  { n: 41, title: "Buscar en matriz ordenada", prompt: "Dada una matriz m×n donde cada fila está ordenada de izquierda a derecha y cada columna de arriba a abajo, determina si un valor objetivo existe en la matriz." },
  { n: 42, title: "Contar palabras", prompt: "Cuenta cuántas palabras tiene un string (palabras separadas por uno o más espacios)." },
  { n: 43, title: "Duplicados ordenados", prompt: "Dado un array de números, retorna un nuevo array con los elementos que aparecen más de una vez. Cada valor duplicado debe aparecer una sola vez y estar ordenado de menor a mayor." },
  { n: 44, title: "Factorial", prompt: "Implementa la función factorial. El factorial de n (n!) es el producto de todos los enteros desde 1 hasta n. Por definición, 0! = 1." },
  { n: 45, title: "Mover ceros al final", prompt: "Dado un array de enteros, devuelve un nuevo array donde todos los 0 han sido movidos al final, manteniendo el orden relativo de los demás elementos." },
  { n: 46, title: "Índice pivote", prompt: "Dado un array de enteros, encuentra el índice pivote donde la suma de los elementos a su izquierda es igual a la suma de los de su derecha. El elemento en el pivote no cuenta. Si no existe, retorna -1." },
  { n: 47, title: "Multiplicar lista", prompt: "Multiplica todos los elementos de una lista. Lista vacía debe dar 1." },
  { n: 48, title: "Rotar string a la izquierda", prompt: "Dado un string y un número k, devuelve el string rotado k posiciones hacia la izquierda." },
  { n: 49, title: "Quitar repetidos", prompt: "Dado un array de números, devuelve un nuevo array sin elementos repetidos (mismo orden)." },
  { n: 50, title: "Quitar repetidos (II)", prompt: "Dado un array de números, devuelve un nuevo array sin elementos repetidos (mismo orden)." },
];

const avanzado: Omit<Exercise, "id" | "level">[] = [
  { n: 1, title: "50 Fibonacci", prompt: "Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0. Cada número es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13…" },
  { n: 2, title: "¿Todos true?", prompt: "Dado un array de booleanos, devuelve True si todos los elementos son True. Un array vacío devuelve True." },
  { n: 3, title: "¿Anagramas? (bool)", prompt: "Devuelve true si s y t son anagramas (mismas letras en distinto orden), false si no." },
  { n: 4, title: "Bandera holandesa (R/G/B)", source: "Google", prompt: "Dada una lista de caracteres con valores 'R', 'G' y 'B', ordénalos de forma que todas las 'R' queden primero, las 'G' en el centro y las 'B' al final. Solo puedes intercambiar elementos. Hazlo en tiempo lineal e in-place. Ej: ['G','B','R','R','B','R','G'] → ['R','R','R','G','G','B','B']." },
  { n: 5, title: "Búsqueda binaria", prompt: "Dado un array ordenado ascendentemente y un valor objetivo, implementa la búsqueda binaria y devuelve el índice del objetivo. Si no existe, devuelve -1." },
  { n: 6, title: "camelCase a snake_case", prompt: "Dado un string en formato camelCase, conviértelo a snake_case (palabras separadas por guion bajo y en minúsculas)." },
  { n: 7, title: "Run-Length Encoding", prompt: 'Implementa compresión básica por conteo de caracteres consecutivos. Cada grupo se representa como caracter + cantidad. Ej: compress_string("aaabbc") → "a3b2c1".' },
  { n: 8, title: "Compuertas lógicas", prompt: 'Dados dos booleanos a y b y el nombre de una compuerta, aplica la operación y devuelve el resultado. Soportadas: "AND", "OR", "XOR", "NAND". XOR: verdadero solo si son distintos. NAND: negación de AND. Ej: logic_gate(True, False, "AND") → False.' },
  { n: 9, title: "Entero a romano", prompt: "Dado un número entero entre 1 y 3999, devuelve su representación en números romanos como string." },
  { n: 10, title: "Romano a entero", prompt: "Dado un número romano como cadena, conviértelo a su equivalente en número entero." },
  { n: 11, title: "Descomprimir k[s]", prompt: 'Dada una cadena codificada en formato k[s], descomprime y devuelve la cadena resultante. Ej: "3[a]2[bc]" → "aaabcbc".' },
  { n: 12, title: "Diferencia simétrica", prompt: "Dados dos arrays, devuelve un nuevo array con los elementos que están en uno u otro, pero no en ambos. El resultado debe estar ordenado de menor a mayor, sin duplicados." },
  { n: 13, title: "Validar expresión matemática", prompt: 'Crea una función que reciba una expresión matemática (String) y compruebe si es correcta (true/false). Debe tener número, operación y otro número separados por espacios, tantas veces como se quiera. Números positivos, negativos, enteros o decimales. Operaciones: + - * / %. Ej: "5 + 6 / 7 - 4" → true; "5 a 6" → false.' },
  { n: 14, title: "Distancia de edición", source: "Google", prompt: "La distancia de edición entre dos strings es el número mínimo de operaciones (inserción, eliminación, sustitución) necesarias para transformar uno en el otro." },
  { n: 15, title: "Único entre triples", source: "Google", prompt: "Dado un array donde todos los elementos aparecen exactamente tres veces, excepto uno que aparece una vez, encuentra ese elemento único. Tiempo O(N) y espacio O(1). Ej: [13,19,13,13] → 19; [6,1,3,3,3,6,6] → 6." },
  { n: 16, title: "Contar únicos (ordenado)", prompt: "Dado un array de números ordenado, devuelve cuántos elementos únicos hay." },
  { n: 17, title: "Regex simple . y *", source: "Facebook", prompt: "Implementa una función que evalúe si un string coincide con una expresión regular simplificada con . y *." },
  { n: 18, title: "Invertir orden de palabras", prompt: "Dado un string con palabras separadas por espacios, devuelve el string con el orden de las palabras invertido." },
  { n: 19, title: "Longitud última palabra", prompt: "Dado un string con palabras separadas por espacios, devuelve la longitud de la última palabra. Ignora espacios al final." },
  { n: 20, title: "Transpuesta de matriz", prompt: "Dada una matriz de números, devuelve su transpuesta intercambiando filas por columnas." },
  { n: 21, title: "Máximo de ventana deslizante", source: "Google", prompt: "Dado un array y k, calcula el valor máximo de cada subarray de longitud k. def slidingWindowMaximum(nums, k) -> list." },
  { n: 22, title: "Suma máxima no adyacentes", source: "Airbnb", prompt: "Dada una lista de enteros, devuelve la mayor suma posible seleccionando números en posiciones no adyacentes." },
  { n: 23, title: "Mediana acumulada", source: "Microsoft", prompt: "Dada una secuencia de números, devuelve la mediana acumulada después de cada elemento." },
  { n: 24, title: "Multiplicar strings", prompt: "Dados dos números no negativos representados como strings, retorna su producto como string sin usar conversión directa a número." },
  { n: 25, title: "Collatz más largo", prompt: "Dado un entero positivo limit, devuelve el número en el rango [1, limit] que genera la secuencia de Collatz más larga." },
  { n: 26, title: "Ordenar por frecuencia", prompt: "Dado un string, ordena los caracteres por frecuencia descendente. Si dos caracteres tienen la misma frecuencia, ordénalos lexicográficamente." },
  { n: 27, title: "Palíndromo más corto", prompt: "Dado un string, encuentra el palíndromo más corto que puedes obtener insertando caracteres." },
  { n: 28, title: "Par más cercano al target", prompt: "Dado un array ordenado y un target, devuelve el par de números cuya suma es más cercana al target." },
  { n: 29, title: "Índice de inserción", prompt: "Dado un array ordenado y un target, devuelve el índice donde está el target o donde debería insertarse." },
  { n: 30, title: "Primer positivo faltante", prompt: "Dado un array de enteros, encuentra el primer entero positivo faltante en tiempo lineal y espacio constante. Puede contener duplicados y negativos. Ej: [3,4,-1,1] → 2; [1,2,0] → 3. Puedes modificar el array in-place." },
  { n: 31, title: "Producto excepto sí mismo", source: "Uber", prompt: "Dada una lista de enteros, devuelve un array donde cada elemento en i es el producto de todos los números excepto el de i. Ej: [1,2,3,4,5] → [120,60,40,30,24]; [3,2,1] → [2,3,6]." },
  { n: 32, title: "Reconstruir oración", source: "Microsoft", prompt: "Dado un conjunto de palabras y un string formado por esas palabras (sin espacios), devuelve la oración original como lista de strings. Si hay varias reconstrucciones, devuelve cualquiera; si no existe ninguna, devuelve None. Ej: ['quick','brown','the','fox'] + 'thequickbrownfox' → ['the','quick','brown','fox']." },
  { n: 33, title: "Reorganizar string", prompt: 'Reorganiza los caracteres de s de manera que dos adyacentes no sean iguales. Retorna el string; si es imposible, retorna "". Pista: usa un max-heap por frecuencia. Imposible cuando una frecuencia > ⌈n/2⌉. Ej: "aab" → "aba"; "aaab" → "".' },
  { n: 34, title: "Rotar array a la derecha", prompt: "Devuelve un nuevo array rotado k posiciones a la derecha. Los últimos k elementos pasan al inicio. Ej: [1,2,3,4,5] k=2 → [4,5,1,2,3]; [1,2] k=3 → [2,1]." },
  { n: 35, title: "Jump Game (Saltar juego)", prompt: "Dado un array de enteros no negativos jumps donde cada elemento es el número máximo de posiciones que puedes avanzar, determina si es posible llegar al último índice partiendo del 0. Ej: [2,3,1,1,4] → True; [3,2,1,0,4] → False." },
];

export const TRAINING: Exercise[] = [
  ...basico.map((e) => ({ ...e, level: "basico" as const, id: `b${e.n}` })),
  ...avanzado.map((e) => ({ ...e, level: "avanzado" as const, id: `a${e.n}` })),
];

export function exercisesByLevel(level: Level): Exercise[] {
  return TRAINING.filter((e) => e.level === level);
}
