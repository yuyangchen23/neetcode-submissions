class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pairs = position.map((p, i) => [p, speed[i]]);
        // [4,2], [1,2], [0,1], [7,1]
        const stack = [];
        pairs.sort((a, b) => b[0] - a[0]);
        // [7,1], [4,2], [1,2], [0,1]

        // 3, 4.2, 10
        for (let i = 0; i <= pairs.length - 1; i++) {
            stack.push((target - pairs[i][0]) / pairs[i][1]);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
