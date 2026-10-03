class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    rob(nums: number[]): number {
        if (nums.length === 1) {
            return nums[0];
        }

        const robHelper = (arr: number[]): number => {
            let rob1 = 0;
            let rob2 = 0;

            for (let i = 0; i < arr.length; i++) {
                let current_max = Math.max(rob1 + arr[i], rob2);
                rob1 = rob2;
                rob2 = current_max;
            }
            return rob2;
        }

        return Math.max(robHelper(nums.slice(1)),
        robHelper(nums.slice(0, nums.length - 1)));
    }
}
