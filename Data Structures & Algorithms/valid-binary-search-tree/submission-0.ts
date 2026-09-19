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
    isValidBST(root: TreeNode | null): boolean {
        let maxValue = Infinity;
        let minValue = -Infinity;

        const isValid = (node: TreeNode, min: number, max: number): boolean => {
            if (!node) {
                return true;
            }

            if (node.val >= max || node.val <= min) {
                return false;
            }

            return isValid(node.left, min, node.val) &&
                    isValid(node.right, node.val, max);
        }

        return isValid(root, minValue, maxValue);
    }
}
