class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        let hashTable = Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            hashTable[s.charCodeAt(i) - 97]++;
            hashTable[t.charCodeAt(i) - 97]--;
        }

        for (const count of hashTable) {
            if (count !== 0) {
                return false;
            }
        }

        return true;
    }
}
