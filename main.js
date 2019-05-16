array = ['Noob', 'Scorpion', 'Jade', 'Raiden', 'Scarlet']

class Stack {
  constructor(arr) {
    this.list= arr
  }

  get () {
    let item = this.list.pop()
    this.list.push(item)
    return item
  }

  add(item) {
    this.list.push(item)
  }
}

class Queue {
  constructor(arr) {
    this.list = arr
  }

  get() {
     return this.list[0]
  }

  add(item) {
     return this.list.push()
  }
}

let stack = new Stack(array)
let queue = new Queue(array)

let Kingdom = {
  king: {name: 'George', knights: { k1: 'Alex', k2: 'Peter' } } ,
  queen: {name: 'Elizabeth', princes: {p1: 'Hector', p2: 'Paris' } }
}
