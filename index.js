// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name){
  drivers.push (name);
}
function destructivelyPrependDriver (name){
  drivers.unshift (name);
}
function destructivelyRemoveLastDriver (name){
  drivers.pop();
}
function destructivelyRemoveFirstDriver (name){
  drivers.shift();
}

function appendDriver (name){
  return [...drivers, name];
}

function prependDriver(name){
  return [name, ...drivers];
}

function prependDriver(name){
  drivers.slice(2, 5);
}



