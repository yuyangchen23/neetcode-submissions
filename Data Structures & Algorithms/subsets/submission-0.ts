class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [];
        const subset = [];

        const subsetRecur = (i: number, nums: number[], res: number[][], subset: number[]) => {

            if (i === nums.length) {
                res.push([...subset]);
                return;
            }

            // include it 
            subset.push(nums[i]);
            subsetRecur(i + 1, nums, res, subset);

            // exclude it
            subset.pop();
            subsetRecur(i + 1, nums, res, subset);
        }

        subsetRecur(0, nums,res, subset);
        return res;
    }
}
