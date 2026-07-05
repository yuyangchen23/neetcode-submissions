class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let remainder = target - nums[i];
            for (const [key, value] of hashMap.entries()) {
                if (remainder === value) {
                    return [i, key];
                }
            }
            hashMap.set(i, nums[i]);
        }
    }
}
