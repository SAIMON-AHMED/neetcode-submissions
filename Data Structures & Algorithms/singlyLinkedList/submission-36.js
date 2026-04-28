class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(i) {
        if (i < 0 || i >= this.size) {
            return -1; // Return -1 if the index is out of bounds
        } else {
            let current = this.head;
            let count = 0;
            while (count < i) {
                current = current.next;
                count++;
            }
            return current.val;
        }
    }

    insertHead(val) {
        const newNode = new Node(val);
        if (!this.head) { // check if the linked list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insertTail(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(i) {
        if (i < 0 || i >= this.size) {
            return false; // Return false if the index is out of bounds
        } else {
            let current = this.head;
            if (i === 0) {
                this.head = this.head.next;
                if (!this.head) {
                    this.tail = null; // If the list becomes empty, update tail to null
                }
            } else {
                let prev = null;
                for (let j = 0; j < i; j++) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
                if (!prev.next) {
                    this.tail = prev; // If the last element is removed, update tail to prev
                }
            }
            this.size--;
            return true;
        }
    }

    getValues() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}
