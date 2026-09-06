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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxDiameter = 0;

        const dfs = (node: TreeNode) => {
            if (node === null) return 0;

            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);

            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            return 1 + Math.max(leftHeight, rightHeight);
        }

        dfs(root);
        return maxDiameter;
    }
}
