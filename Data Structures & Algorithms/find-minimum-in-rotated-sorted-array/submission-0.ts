class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0; // 
        let right = nums.length - 1;
        let smallest = nums[0];

        while (left <= right) { // 6 7 1 2 3 4 5
            if (nums[left] <= nums[right]) { 
                smallest = Math.min(smallest, nums[left]);
                return smallest;
            }

            let mid = Math.floor((left + right) / 2);//3
            smallest = Math.min(smallest, nums[mid]);

            if (nums[left] <= nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return smallest;
    }
}
