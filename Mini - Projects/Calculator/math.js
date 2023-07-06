  const add = (num1, num2) => {
  return num1 + num2;
}

const sub = (num1, num2) => {
  return num1 - num2;
}

const mul = (num1, num2) => {
  return num1 * num2;
}

const div = (num1, num2) => {
  if(num2 === 0){
    throw new Error('Cannot divide by zero')
  } else {
    return num1 / num2;
  }
}

module.exports = {add, sub, mul, div };
