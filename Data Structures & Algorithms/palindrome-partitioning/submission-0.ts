class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const curr = [];
        const res = [];

        const isPalindrome = (s: string) => {
            return s === s.split("").reverse().join("");
        }

        const par = (index: number, s: string, curr: string[], res: string[][]) => {
            
            if (index === s.length) {
                res.push([...curr]);
                return;
            }

            let substring = "";
            for (let i = index; i < s.length; i++) {
                substring += s[i];
                if (isPalindrome(substring)) {
                    curr.push(substring);

                    par(i + 1, s, curr, res);

                    curr.pop();
                }
            }
        }

        par(0, s, curr, res);
        return res;
    }
}
