/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 === null) {
            return list2;
        } else if (list2 === null) {
            return list1;
        }

        let res = new ListNode();
        let cur = res;

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                cur.next = list1;
                list1 = list1.next;
                cur = cur.next;
            } else if (list2.val < list1.val) {
                cur.next = list2;
                list2 = list2.next;
                cur = cur.next;
            } else {
                cur.next = list1;
                list1 = list1.next;
                cur = cur.next;
            }
        }

        while (list1 !== null) {
            cur.next = list1;
            list1 = list1.next;
            cur = cur.next;
        }

        while (list2 !== null) {
            cur.next = list2;
            list2 = list2.next;
            cur = cur.next;
        }

        return res.next;
    }
}
