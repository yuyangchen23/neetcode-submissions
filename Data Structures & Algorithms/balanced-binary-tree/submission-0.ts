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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let isBalanced = true;

        const dfs = (node: TreeNode): number => {
            if (!node) return 0;

            let l = dfs(node.left);
            let r = dfs(node.right);

            if(Math.abs(l - r) > 1) {
                isBalanced = false;
            }

            return 1 + Math.max(l, r)
        }

        dfs(root);

        return isBalanced;
    }
}
