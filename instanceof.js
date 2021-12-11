/** 
  instanceof
  tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
*/

function myInstanceOf (target, origin) {
  while (target) {
    if (Object.getPrototypeOf(target) === origin.prototype) {
      return true
    }
    target = Object.getPrototypeOf(target)
    // if (target.__proto__ === origin.prototype) {
    //   return true
    // }
    // target = target.__proto__
  }
  return false
}