class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = [...nums].sort((a, b) => a - b);
        
        const res = [];

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] === sorted[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = sorted.length - 1;

            while (left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];
                if (sum === 0) {
                    res.push([sorted[i], sorted[left], sorted[right]]);
                    left++;
                    right--;

                    while (left < right && sorted[left] === sorted[left - 1]) {
                        left++;
                    }

                    while (left < right && sorted[right] === sorted[right + 1]) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
