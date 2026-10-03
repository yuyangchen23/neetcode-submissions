class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let one = 0; //i - 1
        let two = 0; //i - 2

        for (let i = 2; i <= cost.length; i++) {
            let current_cost = Math.min(one + cost[i - 1], two + cost[i - 2]);
            two = one;
            one = current_cost;
        }

        return one;

        
    }
}
