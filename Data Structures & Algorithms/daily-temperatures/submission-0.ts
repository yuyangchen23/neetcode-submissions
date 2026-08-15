class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = temperatures.length - 1; i >= 0; i--) {
            // 28
            while(temperatures[i] >= temperatures[stack[stack.length - 1]]) {
                stack.pop();
            }

            if (stack.length !== 0) {
                res[i] = stack[stack.length - 1] - i;
            }
            stack.push(i);
        }
        return res;
    }
}
