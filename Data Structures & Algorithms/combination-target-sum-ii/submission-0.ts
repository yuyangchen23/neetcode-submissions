class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const cur = [];
        const res = [];

        const sorted = [...candidates].sort((a, b) => a - b);

        const makeComb = (i: number, cand: number[], remSum: number, cur: number[], res: number[][]) => {

            if (remSum === 0) {
                res.push([...cur]);
                return;
            }

            if (remSum < 0 || i >= cand.length) {
                return;
            }

            cur.push(cand[i]);
            makeComb(i + 1, cand, remSum - cand[i], cur, res);

            cur.pop();

            let nextI = i + 1;
            while (nextI < cand.length && cand[nextI] === cand[i]) {
                nextI++;
            }

            makeComb(nextI, cand, remSum, cur, res);
        }

        makeComb(0, sorted, target, cur, res);
        return res;
    }
}
