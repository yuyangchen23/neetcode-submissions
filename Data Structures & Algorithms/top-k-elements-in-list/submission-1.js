class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashTable = new Map();

        for (const n of nums) {
            if (!hashTable.has(n)) {
                hashTable.set(n, 1);
            } else {
                const currentValue = hashTable.get(n) || 0;
                hashTable.set(n, currentValue + 1);
            }
        }

        const sortedMap = [...hashTable]
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, k)
                            .map(([key, val]) => key);

        return sortedMap;

    }
}
