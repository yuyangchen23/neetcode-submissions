class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];
        const cur = [];
        
        const makeCombination = (i: number, nums: number[], remSum: number, cur: number[], res: number[][]) => {

            if (remSum === 0) {
                res.push([...cur]);
                return;
            }

            // invalid case
            if (remSum < 0 || i >= nums.length) {
                return;
            }

            cur.push(nums[i]);

            makeCombination(i, nums, remSum - nums[i], cur, res);

            cur.pop();
            makeCombination(i + 1, nums, remSum, cur, res);
        }

        makeCombination(0, nums, target, cur, res);
        return res;
    }
}
