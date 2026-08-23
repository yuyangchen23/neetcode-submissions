class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        
        const hashMap = new Map<string, number>();

        let left = 0;

        let maxLength = 0;
        let maxFreq = 0;

        for (let right = 0; right < s.length; right++) {

            const char = s[right];
            hashMap.set(char, (hashMap.get(char) || 0) + 1);

            let curCount = hashMap.get(char)!;
            maxFreq = Math.max(maxFreq, curCount);

            const curLength = right - left + 1;

            if (curLength - maxFreq > k) {
                hashMap.set(s[left], (hashMap.get(s[left])) - 1);
                left++;
            } else {
                maxLength++;
            }
        } 
        return maxLength;
    }
}
