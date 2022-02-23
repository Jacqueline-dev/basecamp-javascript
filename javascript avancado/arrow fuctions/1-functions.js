var obj = {
  showContext: function showContext() {
    this.log('teste')

    setTimeout(
      function () {
        console.log(this)
      }.bind(this),
      1000
    )
  },
  log: function log(value) {
    console.log(value) 
  }
}
obj.showContext() 

// forma moderna
var obj = {
  showContext: function showContext() {
    this.log('teste')

    setTimeout(() => {
        this.log('after 100ms')
      }, 1000)
  },
  log: function log(value) {
    console.log(value) 
  }
}
obj.showContext()

