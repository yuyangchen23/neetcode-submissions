class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const stack: number[] = [];

        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                const b = stack.pop(); // 4
                const a = stack.pop(); // 9

                if (token === "+") {
                    stack.push(a + b); // 
                } else if (token === "-") {
                    stack.push(a - b);
                } else if (token === "*") {
                    stack.push(a * b); // 
                } else {
                    stack.push(Math.trunc(a / b));
                }
            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop();
    }
}
