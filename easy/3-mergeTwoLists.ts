/*

21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = !val ? 0 : val;
    this.next = !next ? null : next;
  }
}

const mergeTwoListsTS = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let res: ListNode = new ListNode();
  let pointer: ListNode = res;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      res.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      res.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    res = res.next;
  }

  while (list1) {
    res.next = new ListNode(list1.val);
    list1 = list1.next;
    res = res.next;
  }

  while (list2) {
    res.next = new ListNode(list2.val);
    list2 = list2.next;
    res = res.next;
  }

  return pointer.next;
};
