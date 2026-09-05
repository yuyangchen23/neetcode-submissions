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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root === null) return 0;

        let leftSize = 0;
        let rightSize = 0;

        leftSize = 1 + this.maxDepth(root.left);
        rightSize = 1 + this.maxDepth(root.right);

        return Math.max(leftSize, rightSize);
    }
}
