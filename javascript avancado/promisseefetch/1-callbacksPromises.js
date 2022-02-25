const asyncTimer = () => {
  new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(12345)
  }, 1000)
  })
}

const simpleFunc = async () => {
  const data = await Promise.all([
    asyncTimer(),
    fetch('/data.json').then(reStream => reStream.json())
  ])
  return data
}

simpleFunc()
 .then(data =>{
   console.log(data)
 })

 .catch(err =>{
   console.log(err)
 })


 // EvenEmitter

 const EventEmitter = require('events')
 const emitter = new EventEmitter()
 emitter.on('User logged', data =>{
   console.log(data)
 })

 emitter.emit('User logged', {user: 'Jacque Ferreira'})
