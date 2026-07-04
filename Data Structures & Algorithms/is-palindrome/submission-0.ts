class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        
        let onlyAlpha = (s.replace(/[^a-zA-Z0-9]/g, "")).toLowerCase();

        // Hello 5
        let mid = Math.floor(onlyAlpha.length / 2); // 2
        for (let i = 0; i <= mid; i++) { // 0 1 2
            for (let j = onlyAlpha.length - i - 1; j >= mid; j--) {
                if (onlyAlpha[i] != onlyAlpha[j]) {
                    return false;
                }
                break;
            }
        }
        return true;
    }
}
