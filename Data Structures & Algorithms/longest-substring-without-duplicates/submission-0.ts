class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const hashSet = new Set();
        let left = 0;
        let right = 0;
        let maxLength = 0;

        while (right < s.length) {

            const cur = s[right];
            
            while (hashSet.has(cur)) {
                hashSet.delete(s[left]);
                left++;
            }

            let curLength = right - left + 1;
            maxLength = Math.max(maxLength, curLength);

            hashSet.add(cur);
            right++;
        }
        return maxLength;
    }
}
