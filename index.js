import LinkedList from "./modules/linklist.js";


const list = new LinkedList();

list.append('dog')
list.append('cat')
list.append('parrot')
list.append('hamster')
list.append('snake')
list.append('turtle')

console.log(list.toString());
console.log(list.size());
console.log(list.at(0));
console.log(list.find('cat'))
console.log(list.contains('parrot'))