/**
 * 链表的倒数第k个元素 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/2 2:11 下午
 * @LastEditTime: 2021/8/2 2:11 下午
 */

// 快慢指针

var getKthFromEnd = function(head, k) {
        let fast = head
        let slow = head
        let i = 0
        // 让 快指针先走 k步
        // 假设 k = 2 , 那么i =》 0 ， 1
        while (i < k) {
            fast = fast.next
            i++
        }
        // 快指针先走了K步之后， 慢指针和快指针再一起下一步下一步的走，当fast走到链表的边界，慢指针的位置就是倒数第K个位置
    while (fast) {
            fast = fast.next
        slow = slow.next;
    }
        return slow
    };
