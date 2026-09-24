class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let one = 1;
        let two = 1;

        for (let i = 0; i < n - 1; i++) { // 2
            let temp = one; // 1 2 
            one = one + two; // 2 3 
            two = temp; // 1 2 
        }
        
        return one;
    }
}
