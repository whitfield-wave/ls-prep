let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


//got to remember that  if (keys.length) tests if length is not 0. My if/else is backwards
function copyObj(objekt,  keys = []) {
  let newObj = {};
  if (keys.length === 0) {
    return newObj = Object.assign({},objekt);
  } else {
    keys.forEach(function(prop) {
      newObj[prop] = objekt[prop]
    });
    return newObj;

  }
  
}

console.log(copyObj(objToCopy, ['bar']))