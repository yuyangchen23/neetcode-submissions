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

        let buckets = Array.from({length: nums.length + 1}, () => []);
        for (const [num, freq] of hashTable.entries()) {
            buckets[freq].push(num);
        }

        let res = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            if (buckets[i].length > 0) {
                res.push(...buckets[i]);
            }
        }

        return res.slice(0, k);
    }
}
