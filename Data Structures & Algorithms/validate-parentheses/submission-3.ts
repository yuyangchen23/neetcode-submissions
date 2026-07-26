class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;

        let checkStack : string[] = [];

        for (const char of s) {
            if (char === "(") {
                checkStack.push(")");
            } else if (char === "[") {
                checkStack.push("]");
            } else if (char === "{") {
                checkStack.push("}");
            } else {
                if (checkStack.pop() !== char) {
                    return false;
                }
            }
        }
        return checkStack.length === 0;
    }
}
