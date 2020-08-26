# LeetCode刷题
## 数据结构篇
### 二叉树
[maximum-depth-of-binary-tree](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
> 104 二叉树的最大深度
给定一个二叉树，找出其最大深度。<br>
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。<br>
说明: 叶子节点是指没有子节点的节点。<br>
示例：<br>
给定二叉树 [3,9,20,null,null,15,7]，
```
    3
   / \
  9  20
    /  \
   15   7
```
> 返回它的最大深度 3 。

解题

分治法
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
import java.util.AbstractMap.SimpleEntry;
import java.util.Stack;
class Solution {
    public int maxDepth(TreeNode root) {
        /*if(root == null) {
            return 0;
        }
        // 分治法
        int leftDepth  = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;*/
        return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        
/*
        // 深度优先遍历写法
        // 使用栈遍历保存深度
        Stack<SimpleEntry<TreeNode,Integer>> stack = new Stack<>();
        if(root != null) {
            stack.add(new SimpleEntry<TreeNode, Integer>(root, 1));
        }

        int depth = 0;
        while(!stack.isEmpty()) {
            SimpleEntry<TreeNode, Integer> current = stack.pop();
            root = current.getKey();
            Integer currentDepth = current.getValue();
            
            if(root != null) {
                depth = Math.max(depth, currentDepth);
                stack.add(new SimpleEntry<>(root.left, currentDepth + 1));
                stack.add(new SimpleEntry<>(root.right, currentDepth + 1));
            }
        }
        return depth;*/
    }
}
```

遍历法

```java
import java.util.AbstractMap.SimpleEntry;
import java.util.Stack;
class Solution {
    public int maxDepth(TreeNode root) {

        // 深度优先遍历写法
        // 使用栈遍历保存深度
        Stack<SimpleEntry<TreeNode,Integer>> stack = new Stack<>();
        if(root != null) {
            stack.add(new SimpleEntry<TreeNode, Integer>(root, 1));
        }

        int depth = 0;
        while(!stack.isEmpty()) {
            SimpleEntry<TreeNode, Integer> current = stack.pop();
            root = current.getKey();
            Integer currentDepth = current.getValue();
            
            if(root != null) {
                depth = Math.max(depth, currentDepth);
                stack.add(new SimpleEntry<>(root.left, currentDepth + 1));
                stack.add(new SimpleEntry<>(root.right, currentDepth + 1));
            }
        }
        return depth;
    }
}
```
> 110. 平衡二叉树 👉 [balanced-binary-tree](https://leetcode-cn.com/problems/balanced-binary-tree/)
>
> 给定一个二叉树，判断它是否是高度平衡的二叉树。
>
> 本题中，一棵高度平衡二叉树定义为：
>
> 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
> 示例 1:
>
> 给定二叉树 [3,9,20,null,null,15,7]
```
    3
   / \
  9  20
    /  \
   15   7
```
> 返回 true 

思路：
分治法，左边平衡 && 右边平衡 && 左右两边高度差不超过1， 因为需要返回是否平衡及高度，要么返回两个数据，要么合并两个数据， 所以用-1 表示不平衡，大于0则表示树高度（二义性：一个变量有两种含义）。
解题

```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        // 左子树平衡 && 右子树平衡 && 左右子树高度差<2
        if(maxDepth(root) == -1) {
            return false;
        }
        return true;
    }

    private int maxDepth(TreeNode root) {
        if(root == null) {
            return 0;
        }
        // 分治法
        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        if(left == -1 || right == -1 || Math.abs(left - right) > 2) {
            return -1;
        }
        // 合并结果,左右子树高度差小于2则平衡返回树的高度，否则返回-1表示不平衡
        return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
    }
}
```
### 链表
敬请期待...

### 栈和队列
敬请期待...
