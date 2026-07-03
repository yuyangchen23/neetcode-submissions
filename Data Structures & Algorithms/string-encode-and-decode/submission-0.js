class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (const s of strs) {
            encodedStr += `${s.length}#${s}`;
            //5#Hello5#World
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedArr = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            let decodedNum = parseInt(str.substring(i, j));

            i = j + 1;

            let decodedStr = str.substring(i, i + decodedNum);
            decodedArr.push(decodedStr);

            i += decodedNum;
        }
        return decodedArr;
    }
}
