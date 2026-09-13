/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const queue = [root];
        const res = [];

        while (queue.length > 0) {
            const length = queue.length;
            
            for (let i = 0; i < length; i++) {
                const curNode = queue.shift();

                if (i === length - 1) {
                    res.push(curNode.val);  
                }

                if (curNode.left) {
                    queue.push(curNode.left);
                }

                if (curNode.right) {
                    queue.push(curNode.right);
                }
            }
        }
        return res;
    }
}
