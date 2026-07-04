class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */


    isPalindrome(s: string): boolean {
        
        let onlyAlpha = (s.replace(/[^a-zA-Z0-9]/g, "")).toLowerCase();

        let left = 0;
        let right = onlyAlpha.length - 1;
        
        while (left < right) {
            if (onlyAlpha[left] !== onlyAlpha[right]) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}
