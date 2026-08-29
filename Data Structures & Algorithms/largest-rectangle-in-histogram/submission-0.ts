class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            // 1 3 7
            let start = i;

            while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
                let [poppedIndex, poppedHeight] = stack.pop();
                // 2 7
                start = poppedIndex;

                let width = i - poppedIndex; // 3-2
                let area = width * poppedHeight; // 1 * 7

                maxArea = Math.max(maxArea, area);
            }
            stack.push([start, heights[i]]);
        }

        while (stack.length > 0) { //1 2 2 4
            let [poppedIndex, poppedHeight] = stack.pop(); //5 4

            let width = heights.length - poppedIndex; // 6-4
            let area = width * poppedHeight;

            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }
}
