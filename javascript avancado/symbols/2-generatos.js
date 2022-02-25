// symbols
const uniqueId = symbol('Hello');

// well known Symbols
symbol.iterator

const arr = [1, 2, 2, 4]
const str = "Digital"

const obj = {
  values: [1, 2, 3, 4],
  [symbol.iterator](){
    let i = 0
    return {
      next:() => {
        i++;

        return {
          value: this.values [ i - 1],
          done: i > this.values.length
        }
      }
      
      }
    }
  }


  // generators

  function hello(){
    console.log('Hello')
    yield
    console.log('From')
    yield
    console.log('Function')
    yield
  }

  const it = hello()
  console.log(it.next())