class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // 5#Hello
        let encodedStr = "";
        for (const s of strs) {
            encodedStr += `${s.length}#${s}`;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns# {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) {
            return [];
        }

        // 5#Hello
        const res = [];

        let start = 0;
        while (start < str.length) {
            let count = start;
            while (str[count] !== "#") {
                count++;
            }

            let decodedNum = +str.substring(start, count); //0 1 //5

            start = count + 1; //2

            let decodedStr = str.substring(start, start + decodedNum);
            // 2 7
            res.push(decodedStr);
            
            start += decodedNum;
        }
        return res;
    }
}
