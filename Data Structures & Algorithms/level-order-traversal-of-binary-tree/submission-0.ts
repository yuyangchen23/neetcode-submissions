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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];
        const res = [];
        const queue = [root];

        while (queue.length > 0) {
            const length = queue.length;
            const temp = [];

            for (let i = 0; i < length; i++) {
                const curNode = queue.shift();
                if (curNode) {
                    temp.push(curNode.val);
                    if (curNode.left) queue.push(curNode.left);
                    if (curNode.right) queue.push(curNode.right);
                }
            }
            res.push(temp);
        }

        return res;
    }
}
