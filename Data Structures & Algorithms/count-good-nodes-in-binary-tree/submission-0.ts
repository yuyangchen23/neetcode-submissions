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
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;

        let goodCount = 0;

        const dfs = (node: TreeNode, maxSoFar: number) => {
            if (!node) return 0;

            if (node.val >= maxSoFar) {
                goodCount++;
            }

            const newMax = Math.max(maxSoFar, node.val);

            dfs(node.left, newMax);
            dfs(node.right, newMax);
        }

        dfs(root, root.val);
        return goodCount;
    }
}
