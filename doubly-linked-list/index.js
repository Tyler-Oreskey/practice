class Node {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop() {
        if (this.length === 0) {
            return this.head;
        }
        
        if (this.length === 1) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node;
        }

        let currNode = this.tail;
        let prevNode = this.tail.prev;
        prevNode.next = null;
        this.tail = prevNode;
        this.length--;

        return currNode;
    }

    push(val) {
        let node = new Node(val);

        // list is empty
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            return node;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return node;
    }

    unshift(val) {
        if (this.length === 0) {
            this.push(val);
            return this.length;
        }

        let node = new Node(val);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this.length;
    }

    print() {
        let currNode = this.head;

        while (currNode !== null) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }

    // reverse list inline
    reverse() {
        let curr = this.head;
        this.tail = curr; // update tail

        while (curr) {
            let next = curr.next;

            curr.next = curr.prev;
            curr.prev = next;
            this.head = curr;
            curr = next;
        }
    }

}

const list = new DoublyLinkedList();
list.push(5);
list.push(2);
list.push(3);
list.push(4);
list.push(7);
list.print();
console.log('---------')
list.unshift(1);
list.unshift(2);
list.print();
console.log('---------')
list.reverse();
list.print();
console.log('---------')
list.pop();
list.print();
console.log(list.length)