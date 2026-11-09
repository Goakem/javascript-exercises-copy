const fibonacci = function(num) {
  /* The problem is to return a number at any given position in the fibonacci
  sequence.

  When the number is postion is 1 or 2 return the fibonacci result as 1
  When the number is postion greater than 1 or 2, Calculate the result of the first 2 preceeding postions and add them together
  i.e. lets solve for postion 3
  Firstly check the number position passed as an argument then calculate for it like this
  the Fibonacci of the number is equal to the fibonacci of the 2 preceeding fibonacci 

  Fibonacci of num 3 is equal to the fibonacci of 3 minus 2( fibonacci of 1) and the fibonacci of the 3 minus 1( fibonacci of 2)
  Which is => Fibonacci of 3 = fibonacci of (3 - 2) + fibonacci of ( 3 - 1)
  F3 = F1 + F2;
  */
};

// Do not edit below this line
module.exports = fibonacci;
