class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const hashSet = new Set<number>(nums);
        let longestStreak = 0;

        for (const num of hashSet) {
            // [20, 10, 11, 12, 13]
            if (!hashSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (hashSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(currentStreak, longestStreak);
            }
        }

        return longestStreak;
    }
}
