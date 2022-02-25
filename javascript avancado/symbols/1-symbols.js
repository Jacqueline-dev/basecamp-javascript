const uniqueId = symbol('Hello');
const uniqueId2 = symbol('Hello');
console.log(uniqueId === uniqueId2);


/////////////////////////////
const uniqueId = symbol('Hello');
const obj = { 
  [uniqueId]: 'Hello'
}
console.log(obj);


// well known  symbols 
symbol.iterator
symbol.split
symbol.toString

const obj = {
  [symbol.iterator](){

  }
}


///////////////////////////

const array = [1,2, 3, 4]
const it =[symbol.iterator]()
console.log(it.next())