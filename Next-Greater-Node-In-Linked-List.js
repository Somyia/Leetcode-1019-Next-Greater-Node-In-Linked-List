/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let ans=[];
    let data=head;
   
    while(data){
        let another = data.next;
        while(another){
        if(data.val<another.val){
            ans.push(another.val);
            
            
            break;

            
        }
        else{
            another = another.next;
        }
            
        }
        if(another==null){
            ans.push(0)
            
        }
        data=data.next;
    }
    return ans;
};
