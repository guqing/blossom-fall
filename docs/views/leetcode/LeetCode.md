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

### 链表
敬请期待...

### 栈和队列
敬请期待...
