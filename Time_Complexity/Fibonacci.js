/*
 T(n) ∈ 2^(n/2)  // Lower bound
 T(n) ∈ 2^n  // Upper bound

 O(2^n) →　Fib (recurision)  // 指数时间函数
 */
function Fib(n) {
    if (n <= 1) {  // 1
        return n;
    } else {
        return Fib(n-1) + Fib(n-2);
        //          1   1      1
    }
}

//O(n) →　Fib (Iterative)  // 线性时间函数
function FibI(n) {
    if (n <= 1) {
        return n;
    }
    let F1, F2, F;
    for (let i=0; i<=n; i++) {
        F = F1 + F2;
        [F1, F2] = [F2, F];
    }
    return F;
}

/*
 Lower bound:
 T(n) = T(n - 1) + T(n - 2) + 4
 T(0) = T(1) = 1
 T(n - 1) ≈　T(n - 2)
 T(n) = 2T(n - 2) + C  // C = 4
      = 2 { 2T(n - 4) + C } + C
      = 4T(n - 4) + 3C     // k = 2
      = 8T(n - 6) + 7C     // k = 3
      = 16T(n - 8) + 15C   // k = 4
      = 2^k * T(n - 2k) + (2^k - 1) * C

  n - 2k = 0 => k = n / 2
  T(n) = 2^(n/2) * T(0) + (2^(n/2) - 1) * C
       = (1 + C) * 2^(n/2) - C


Upper bound:
T(n - 2) ≈ T(n - 1)
T(n) = 2T(n - 1) + C
     = 4T(n - 2) + 3C
     = 8T(n - 3) + 7C
     = 2^k * T(n - k) + (2^k - 1) * C

n - k = 0 => k = n
T(n = 2^n * T(0) + (2^n - 1) * C
    = (1 + C) * 2^n - C
 



Call Stack:

L0                       F(5)
                      /       \
L1                  F(4)       F(3)
                    /  \        /  \
L2                F(3) F(2)   F(2)  F(1)
                   /  \        /  \
L3               F(2) F(1)   F(1)  F(0)
                  /  \
L4              F(1) F(0)



                          5
                      /       \
                      3          2
                    /  \        /  \
                    2   1      1    1  
                   /  \        /  \
                   1   1      1    0 
                  /  \
                  1   0 

|    F(0)   |
|-----------|
|    F(1)   |
|-----------|
|    F(2)   |
|-----------|  Space Complexity: O(n)
|    F(3)   |
|-----------|
|    F(4)   |   
|-----------|
|    F(5)   |
 * */

// Recursion with memoization
let F = {};
function FibM(n) {
    if (n <= 1) {
        return n;
    }

    if (F[n] !== undefined) {
        return F[n];
    }

    return F[n] = FibM(n - 1) + FibM(n - 2);

}

module.exports = {
    Fib,
    FibI,
    FibM
}
