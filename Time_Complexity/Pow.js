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
 
T(n) = T(n - 1) + C
     = T(n - 2) + 2C
     = T(n - k) + kC

n -k = 0 => k = n
T(n) = T(n) + nc
     = nC + 1 => O(n)

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
 
T(n) = T(n/2) + C1        if n is even
     = T(n - 1) + C2      if n is odd

T(0) = 1, T(1) = 1 + C2

T(n) = T((n - 1)/2) + C1 + C2
     = T(n/2) + C      C > C1
     = T(n/4) + 2C
     = T(n/8) + 3C
     = T(n/2^k) + 3k

n/2^k = 1 => 2^k = n => k = log2n
T(n) = T(1) + Clogn
     = 1 + C2 + Clogn => O(logn)


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
