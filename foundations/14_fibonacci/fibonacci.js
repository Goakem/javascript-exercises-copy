const fibonacci = function(num) {
  let changedNum = Number(num); 
  let result;
  let fibOne = 1;
  let fibTwo = 1;

  if (changedNum < 0) {
    return "OOPS";
  }

  if(changedNum === 0) {
    result = 0;
  }
  else if( changedNum === 1 || changedNum === 2) {
      result = 1;
  } else {
    result = fibOne + fibTwo;
      for(let i = 3; i< changedNum; i++) {
        fibOne = fibTwo;
        console.log("Fib One RN", fibOne);
        fibTwo = result;
        console.log("Fib Two RN", fibTwo);
        result = fibOne + fibTwo;
      }
  }
  console.log(result);
  return result;

};

// Do not edit below this line
module.exports = fibonacci;
