class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0;
        let right = matrix.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let n = matrix[mid].length;

            if (matrix[mid][0] <= target && matrix[mid][n - 1] >= target) {
                let inLeft = 0;
                let inRight = n - 1;
                while (inLeft <= inRight) {
                    let inMid = Math.floor((inLeft + inRight) / 2);

                    if (matrix[mid][inMid] === target) {
                        return true;
                    } else if (matrix[mid][inMid] > target) {
                        inRight = inMid - 1;
                    } else {
                        inLeft = inMid + 1;
                    }
                }
                return false;
            } else if (matrix[mid][0] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}
