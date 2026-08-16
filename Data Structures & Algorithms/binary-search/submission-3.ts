class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1;
        }

        const sorted = [...nums].sort((a, b) => a - b);

        let left = 0;
        let right = nums.length; //2

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (sorted[middle] === target) {
                return middle;
            } else if (sorted[middle] > target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        return -1;
    }
}
