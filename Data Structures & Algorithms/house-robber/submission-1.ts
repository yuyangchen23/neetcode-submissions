class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let rob1 = 0;
        let rob2 = 0;

        for (let i = 0; i < nums.length; i++) {
            let current_max = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2; //0 1 1 4
            rob2 = current_max; //1 1 4 4
        }

        return rob2;
    }
}
