class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;

        let checkStack : string[] = [];

        const inAndOut: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (const char of s) {
            if (char in inAndOut) {
                if (checkStack.length > 0 
                    && checkStack[checkStack.length - 1] === inAndOut[char]) {
                        checkStack.pop();
                } else {
                    return false;
                }
            } else {
                checkStack.push(char);
            }
        }
        return checkStack.length === 0;
    }
}
