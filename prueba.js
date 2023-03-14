const { threadId } = require("worker_threads");

// LISTAS
class Lista {
  length = 0;

  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length == 0) return undefined;
    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }
}

const lista = new Lista();
lista.push(1);
lista.push(2);
lista.push(3);

// console.log(lista[1], lista.length)

// console.log(lista.pop(), lista.length)

// LISTA ENLAZADA

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  length = 0
  revert(list){
    let prev = this[this.length]-1
    let item = this[this.length]
    let next = this[this.length]+1

    if(this.length == 0) return undefined
    while()

  } 
}

const lista_enlazada = new Node(1, new Node(2, new Node(3, new Node(4))));

// console.log(JSON.stringify(lista_enlazada, null, 2))

// LISTA DOBLEMENTE ENLAZADA

class Node2 {
  constructor(preview = null, value, next = null) {
    this.preview = preview;
    this.value = value;
    this.next = next;
  }
}

const lista_doblemente_enlazada = new Node2(
  null,
  1,
  new Node2(1, 2, 
    new Node2(2, 3,
      new Node2(3,4)))
);

console.log(JSON.stringify(lista_doblemente_enlazada, null, 3));


