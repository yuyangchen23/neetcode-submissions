class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const countFreq = new Map<string, string[]>();

        for (const s of strs) {
            let count = Array(26).fill(0);
            for (const char of s) {
                count[char.charCodeAt(0) - 97]++;
            }

            let key = count.join(",");
            if(!countFreq.has(key)) {
                countFreq.set(key, [])
            }

            countFreq.get(key).push(s);
        }

        return [...countFreq.values()]
    }
}
