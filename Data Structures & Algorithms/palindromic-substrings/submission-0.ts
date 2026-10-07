class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        if (s.length === 1) {
            return 1;
        }

        let count = 0;

        for (let i = 0; i < s.length; i++) {
            // odd cases
            let left = i;
            let right = i;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }

            left = i;
            right = i + 1;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }

        }

        return count;
    }
}
