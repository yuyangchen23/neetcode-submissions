class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // 7,1,5,3,6,4

        let left = 0;
        let profit = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] >= prices[left]) {
                const diff = prices[right] - prices[left];
                if (diff > profit) {
                    profit = diff;
                }
            } else {
                left = right;
            }
        }

        return profit;
    }
}
