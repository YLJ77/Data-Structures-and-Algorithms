function squareMatrixMultiply(A, B) {
    let rows = A.length;
    let C = [];
    let Cij;

    //初始化矩阵C
    for (let i=0; i<rows; i++) C[i] = [];

    for (let i=0; i<rows; i++) {
        for (let j=0; j<rows; j++) {
            Cij = 0;
            for (let k=0; k<rows; k++) {
                Cij += A[i][k] * B[k][j];
            }
            C[i].push(Cij);
        }
    }

    return C;
}

module.exports = squareMatrixMultiply;
