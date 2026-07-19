class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let largest = 0;
        let left = 0;
        let right = heights.length - 1;
        
        while (left < right) {
            const h = Math.min(heights[left], heights[right]);
            const w = right - left;
            const area = h * w;

            if (area > largest) {
                largest = area;
            }

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return largest;
    }
}
