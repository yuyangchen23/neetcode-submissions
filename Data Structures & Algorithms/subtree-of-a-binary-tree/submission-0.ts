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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        if (subRoot === null) return true;
        if (!root && subRoot) return false;
        
        const isSameTree = (root: TreeNode, subRoot: TreeNode): boolean => {
            if (!root && !subRoot) return true;
            if (!root || !subRoot) return false;

            if (root.val !== subRoot.val) {
                return false;
            }

            return isSameTree(root.left, subRoot.left) &&
                    isSameTree(root.right, subRoot.right);
        }

        if (isSameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) ||                   this.isSubtree(root.right, subRoot);
    }
}
