class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let i = 0;
        let zeroCount = 0;
        let sum = 1;

        while (i < nums.length) {
            if (nums[i] === 0) {
                zeroCount++;
            } else {
                sum *= nums[i];
            }
            i++;
        }

        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 1) {
                res.push(0);
            } else if (zeroCount === 1) {
                if (nums[i] !== 0) {
                    res.push(0);
                } else {
                    res.push(sum);
                }
            } else {
                res.push(sum / nums[i]);
            }
        }
        return res;
    }
}
