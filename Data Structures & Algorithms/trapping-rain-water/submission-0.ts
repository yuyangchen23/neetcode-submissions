class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        
        let left = 0;
        let right = height.length - 1;
        let sum = 0;
        const prefix = [];
        const suffix = [];

        // 0, 1, 5, 5, 5
        // 1, 5, 2, 3, 4
        // 5, 4, 4, 4, 0

        // -1, -4, 2, 1, -4
        let p_max = 0;
        while (left < height.length) {
            prefix.push(p_max);
            if (height[left] > p_max) {
                p_max = height[left];
            }
            left++;
        }

        let s_max = 0;
        while (right >= 0) {
            suffix[right] = s_max;
            if (height[right] > s_max) {
                s_max = height[right];
            }
            right--;
        }
        

        for (let i = 0; i < height.length; i++) {
            const trapped = Math.min(prefix[i], suffix[i]) - height[i];

            if (trapped > 0) {
                sum += trapped;
            }
        }
        return sum;
    }
}
