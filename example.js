class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value) {
        const newNode = new Node();
        newNode.value = value;

        if(this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;

        while (current.next !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepand(value) {
        const newNode = new Node();
        newNode.value = value;

        newNode.nextNode = this.head;
        this.head = newNode;
    }
}

class Node {
    constructor()
    {
        this.value = null;
        this.nextNode = null;
    }
}