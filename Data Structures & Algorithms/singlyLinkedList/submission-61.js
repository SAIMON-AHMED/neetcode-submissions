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
            return -1;
        } else {
            let count = 0;
            let cur = this.head;
            while (count < i) {
                cur = cur.next;
                count++;
            }
            return cur.val;
        }
        
    }

    insertHead(val) {
        const newNode = new Node(val);
        if (this.head === null) {
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
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.size++;
    }

    remove(i) {
        if (i < 0 || i >= this.size) {
            return false;
        } else {
            if (i === 0) {
                this.head = this.head.next;
            } else {
                let count = 0;
                let cur = this.head;
                let prev = null;
                while (count < i) {
                    prev = cur;
                    cur = cur.next;
                    count++;
                }
                prev.next = cur.next;
                if (prev.next === null) {
                    this.tail = prev;
                }
            }
        }
        this.size--;
        return true;
    }

    getValues() {
        let arr = [];
        let cur = this.head;
        while (cur !== null) {
            arr.push(cur.val);
            cur = cur.next;
        }
        return arr;
    }
}