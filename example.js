class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if(this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }
}

class Node {
    constructor(value, nextNode)
    {
        this.value = null;
        this.nextNode = null;
    }
}