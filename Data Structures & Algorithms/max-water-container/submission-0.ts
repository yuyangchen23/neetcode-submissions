class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let largest = 0;
        
        for (let i = 0; i < heights.length; i++) {
            let right = heights.length - 1;

            while (right > i) {
                const h = Math.min(heights[i], heights[right]);
                const w = right - i;

                const sum = h * w
                if (sum > largest) {
                    largest = sum;
                }

                right--;
            }
        }
        return largest;
    }
}
