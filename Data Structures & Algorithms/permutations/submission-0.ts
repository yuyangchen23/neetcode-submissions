class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {

        const cur = [];
        const res = [];
        const boolEle = Array(nums.length).fill(false);

        const makePerm = (nums: number[], cur: number[], res: number[][]) => {

            if (cur.length === nums.length) {
                res.push([...cur]);
                return;
            }

            for (let j = 0; j <= nums.length - 1; j++) {
                if (boolEle[j] === true) {
                    continue;
                } else {
                    boolEle[j] = true;
                    cur.push(nums[j]);

                    makePerm(nums, cur, res);

                    cur.pop();
                    boolEle[j] = false;
                }
            }
        }

        makePerm(nums, cur, res);
        return res;
    }
}
