class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const hashSet = new Set<number>(nums);
        let longestStreak = 0;

        for (const num of hashSet) {
            if (!hashSet.has(num - 1)) {
                let currentStreak = 1;
                let currentNum = num;

                while (hashSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak++;
                }

                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
            }
        }
        return longestStreak;
    }
}
        
