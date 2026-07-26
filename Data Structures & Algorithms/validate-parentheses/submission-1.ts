class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let checkStack: string[] = [];
        // {([]))
        // {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                checkStack.push(s[i]);
            } else {
                if (s[i] === ")" && checkStack.at(-1) !== "(") {
                    return false;
                } else if (s[i] === "]" && checkStack.at(-1) !== "[") {
                    return false;
                } else if (s[i] === "}" && checkStack.at(-1) !== "{") {
                    return false;
                }
                checkStack.pop();
            }
        }
        if (checkStack.length !== 0) {
            return false;
        }
        
        return true;
    }
}
