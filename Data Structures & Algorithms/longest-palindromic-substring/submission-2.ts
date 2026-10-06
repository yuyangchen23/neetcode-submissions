class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        if (s.length === 1) {
            return s;
        }
        
        let resLen = 0;
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            // odd palindrome
            let left = i;
            let right = i;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                let curLength = right - left + 1;
                if (curLength > resLen) {
                    res = left;
                    resLen = curLength;
                }
                left--;
                right++;
            }

            // even palindrome
            left = i;
            right = i + 1;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                let curLength = right - left + 1;
                if (curLength > resLen) {
                    res = left;
                    resLen = curLength;
                }
                left--;
                right++;
            }
        }

        return s.substring(res, res + resLen);

    }
}
