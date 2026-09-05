class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) {
            return false;
        }

        const s1count = new Array(26).fill(0);
        const s2count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1count[i] === s2count[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2count[index]++;
            if (s1count[index] === s2count[index]) {
                matches++;
            } else if (s1count[index] + 1 === s2count[index]) {
                matches--;
            }

            let i = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2count[i]--;
            if (s1count[i] === s2count[i]) {
                matches++;
            } else if (s1count[i] - 1 === s2count[i]) {
                matches--;
            }

            l++;
        }
        return matches === 26;
    }
}
