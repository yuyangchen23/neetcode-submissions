class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        
        let i = 0;
        const res = [];

        while (i < numbers.length) {
            const remainder = target - numbers[i];
            
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[j] === remainder && numbers[j] !== numbers[i]) {
                    res.push(i + 1);
                    res.push(j + 1);
                    return res;
                }
            }
            i++;
        }
    }
}
