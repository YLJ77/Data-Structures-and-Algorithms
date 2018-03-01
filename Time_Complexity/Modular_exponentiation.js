/*
 (a * b) % M = {(a % M) * (b % M)} % M

             {(x^(n/2) % M) * (x^(n/2) % M)} % M     if n is even
 x^n % M = { {(x % M) * (x^(n - 1) % M)} % M         if n is odd
             1                                       if n = 0
 */

function Mod(x, n, M) {
    if (n === 0) {
        return 1;
    } else if (n % 2 === 0) {
        let y = Mod(x, n/2, M);
        return (y * y) % M;
    } else {
        return ( (x % M) * Mod(x, n - 1, M) ) % M;
    }
}

module.exports = Mod;
