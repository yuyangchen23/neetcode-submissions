class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let countFreq = new Map();

        for (const s of strs) {
            let count = Array(26).fill(0);

            for (const char of s) {
                count[char.charCodeAt(0) - 97]++;
            }

            const key = count.join(',');
            if (!countFreq.has(key)) {
                countFreq.set(key, []);
            }

            countFreq.get(key).push(s);
        }

        return [...countFreq.values()];
    }
}
