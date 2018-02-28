/*
 
x^n = { x * x^(n - 1)  if n > 0
        1              if n = 0
*/

function Pow(x, n) {
    if (n === 0) {
        return 1
    } else {
        return x * Pow(x, n - 1);
    }
}

/*

Stack:

    x^8
     |
    x^7
     |      O(n)
    x^6
     .
     .
     .
    x^0
*/


/*        x^(n/2) * x^(n/2)      if n is even
 x^n = {  x * x^(n - 1)          if n is odd
          1                      if n = 0
 */

function Pow_(x, n) {
    if (n === 0) {
        return 1;
    } else if (n % 2 === 0) {
        let y = Pow(x, n/2);
        return y * y;  // Don't call: return Pow(x, n/2) * Pow(x, n/2)
    } else {
        return x * Pow(x, n - 1);
    }
}

/*
   Stack:

     x^8
      |
     x^4
      |        O(log n)
     x^2
      |
     x^1
      |
     x^0
*/
