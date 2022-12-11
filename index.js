
function receivesAFunction(callback){
  callback();
}
receivesAFunction(() => {

})
function returnsANamedFunction(){
  let faith= () => console.log("name")
  return (faith)
}
var returnsAnAnonymousFunction = function() {
  return (() => {
      alert('This is an anonymous function')
  }
  )
}