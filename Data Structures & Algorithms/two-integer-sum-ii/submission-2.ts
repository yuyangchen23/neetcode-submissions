class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        
        let left = 0;
        let right = numbers.length - 1;
        let sum = 0;

        while (left < numbers.length) {
            sum = numbers[left] + numbers[right];

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return [left + 1, right + 1];
            }
        }
    }
}
