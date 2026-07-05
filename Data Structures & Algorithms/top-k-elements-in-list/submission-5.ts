class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap = new Map<number, number>();

        for (const n of nums) {
            hashMap.set(n, (hashMap.get(n) ?? 1) + 1);
        }

        const sortMap = [...hashMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([key, val]) => key);


        return sortMap;
    }
}
