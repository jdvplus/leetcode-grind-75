export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = !val ? 0 : val;
    this.left = !left ? null : left;
    this.right = !right ? null : right;
  }
}