class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return newNode;
    }

    pop() {
        let currNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            this.length--;
            return currNode;
        }

        while (currNode.next !== this.tail) {
            currNode = currNode.next;
        }

        currNode.next = null;
        this.tail = currNode;
        this.length--;
        return currNode;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail = curr;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            this.head = curr;
            prev = curr;
            curr = next;
        }

    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return newNode;
    }

    print() {
        let currNode = this.head;

        while (currNode) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }
}

const list = new SinglyLinkedList();

list.push(1);
list.unshift(2);
list.push(2);
list.print();
console.log('------------')
list.reverse();
list.print();
console.log('------------')
list.push(3);
list.push(4);
list.print();
console.log('------------')
list.reverse();
list.print();