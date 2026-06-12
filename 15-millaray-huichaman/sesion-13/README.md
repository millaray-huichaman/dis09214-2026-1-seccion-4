# sesion-13
## bits y Bytes
8 bits = 1 Bytes

24 bits = 3 Bytes

## colores

llegué tarde por lo que voy a poner lo que entendí :(

buscando *rgb color picker* hacemos una conversión de RGB, CMYK, HSV, HSL, y el HEX

partiendo desde 0,0,0 en el RGB , si ponemos algún diez en algún valor, en el HEX se leerá a ese valor, ejemplo:

r,g,b = rrggbb
0,0,10 = 00000a

si este valor sube de 10, aumentará una letra:

0,0,11 = 00000b
0,0,13 = 00000d
0,0,15 = 00000f

pero con 16 el valor en el HEX cambia y deja de ser letra. ¿Porqué ésto?

el sistema HEXADECIMAL cuenta con valores de a 16, por lo que ocupan los números del 0-9 y del a-f para representar los valores rgb.

en el sistema RGB se trabajan con valores del 0-255, o sea, 256 valores

2^8=256, entonces con 8 bits se pueden representar 256 valores distintos

### calcular el hex del rgb

para calcular el hex de un rgb se debe dividir el valor rgb en 16 y si da decimal se saca en entero y se multiplica el decimal por 16.

###### ejemplos 
####### 240,30,160 debo hacer:
####### 240/16= 15, como mi segundo valor es 0 sería F0
####### 30/16= 1,875, el valor entero es 1 y el decimal sería: 0,875*16= 14, entonces el valor sería 1e
####### 160/16= 10, mi segundo valor es 0 otra vez, quedaría así: a0
####### f01ea0
