


// New lecture:Linkedlist:1

var reverseList = function(head) {
    if (head === null) {
        return head;
    }
    
    let current = head;
    let previous = null;
    
    while (current !== null) {
        let temp = current.next;//we are store the current element with the temporary
        current.next = previous;//we are point out the link towards the reverse 
        previous = current;//previous node move towards thecurrent node 
        current = temp;//current node move toards the next node
    }
    
    return previous;
};



//New lecture:2

//linked list node

class listnode {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
function hascycle(head){
//initialise the two pointer with the head  
let fastpointer=head;
let slowpointer=head;
while(fastpointer!=null&&fastpointer.next!==null){
//move slowpointer by 1and move fastpointer by 2
slowpointer=slowpointer.next;
fastpointer=fastpointer.next.next;
//if both the pointer are meet one point then cycle present
if(slowpointer===fastpointer)
return true;
}
return false;
};

//create the linked lit where the given the number
let head = new listnode(1);
let node2 = new listnode(2);
let node3 = new listnode(3);
let node4 = new listnode(4);
let node5 = new listnode(5);

//connect the all the linked list node is present
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
//node5.next = node3;

console.log(hascycle(result.val));

// Checking if the linked list has a cycle
let hasCycleResult = hascycle(head);
console.log("Cycle present:", hasCycleResult);


//linked list node
class listnode {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
//let move whether it is the single step or multiple step by the pointer
function middlenode(head){
let p1=head;
let p2=head;
while(p2!=null&&p2.next!=null){
//p1 move forword by 1,then p2 move forword by 2    
p1=p1.next;
p2=p2.next.next; 
}
return p1;//when the p2 reaches the end then p1 reaches the middle
};

//create the linked lit where the given the number
let node1 = new listnode(1);
let node2 = new listnode(2);
let node3 = new listnode(3);
let node4 = new listnode(4);
let node5 = new listnode(5);

//connect the all the linked list node is present
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Finding the middle node
let result = middlenode(node1);

// Printing the value of the middle node
console.log(result.val);


//var mergeTwoLists = function(l1, l2) {
function mergeTwoLists(l1,l2){
if(!l1 || !l2) return l1 || l2
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
};
let l1=[11,12,13];
let l2=[4,5,6];
console.log(mergeTwoLists(l1,l2));


class ListNode{
      constructor(val=null,next=null){
        this.val=val;
        this.next=next;
    }
}




function validpalindrome(head){
//find the middle of the linked list
let slow=head;
let fast=head;

while(fast&&fast.next){
    slow=slow.next;
    fast=fast.next.next;
}
//reverse the linked list
let secondhalfhead=reversedlinkedlist(slow);

let firsthalf=head;
let secondhalf= secondhalfhead;
while(secondhalf){
    if(firsthalf.val!==secondhalf.val){//verify that whether we got the  both are different value or not
        return false;
    }
firsthalf=firsthalf.next;
secondhalf=secondhalf.next;
}
return true;
};
function reversedlinkedlist(head){
    let previous=null;
    let current=head;
    let nextnode=null;
while(current!==null){
    nextnode=current.next;//store the next node
    current.next=previous;//reverrse the pointer direction
    previous=current;//move previous to current node
    current=nextnode;//move current to next node
}
return previous;
};


// Creating a sample palindrome linked list
let node1 = new ListNode('n');
let node2 = new ListNode('a');
let node3 = new ListNode('v');
let node4 = new ListNode('a');
let node5 = new ListNode('v');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Checking if the linked list is a palindrome
let isPalindromeResult =  validpalindrome(node1);

// Printing the result
console.log(isPalindromeResult);

//New lecture:3




