class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashTable = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (hashTable.has(complement)) {
                return [hashTable.get(complement), i]
            }
            hashTable.set(nums[i], i);
        }

    }
}
