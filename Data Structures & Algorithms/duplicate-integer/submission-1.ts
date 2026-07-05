class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>();

        for (const n of nums) {
            if (!seen.has(n)) {
                seen.add(n);
            } else {
                return true;
            }
        }
        return false;
    }
}
