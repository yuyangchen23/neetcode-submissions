class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let countAna = {};

        for (let i = 0; i < s.length; i++) {
            countAna[s[i]] = (countAna[s[i]] || 0) + 1;

            countAna[t[i]] = (countAna[t[i]] || 0) - 1;
        }

        for (let key in countAna) {
            if (countAna[key] !== 0) return false;
        }
        return true;
    }
}
