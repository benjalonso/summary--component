def imprimir_arbol(profundidad):
  for i in range(profundidad):
    print(" " * (profundidad - i - 1) + "*" * (2 * i + 1))

imprimir_arbol(3)