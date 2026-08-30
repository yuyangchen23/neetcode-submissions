class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        // 1 2 3 4

        let left = 1;
        let right = Math.max(...piles);
        let minHour = 0; // 6

        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // 25
            let totalHours = 0;

            for (const pile of piles) {
                totalHours += Math.ceil(pile / mid); // 1 1 1 1
            }

            if (totalHours <= h) {
                minHour = mid;
                right = mid - 1;
            } else {
                left = mid + 1; // 25
            }
        }
        return minHour;
    }
}
