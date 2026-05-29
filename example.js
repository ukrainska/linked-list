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

        while (current.nextNode !== null) {
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

    size() {
        let current = this.head;
        let counter = 0;

        while (current !== null) {
            counter++;
            current = current.nextNode;
        }
        return counter;
    }

    head () {
        if (this.head === null) {
            return undefined;
        }
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return undefined;
        }
        
        let current = this.head;
        while(current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        let current = this.head;
        let currentIndex = 0;

        while (current !== null) {
            if (requiredIndex === index) {
                return current.value;
            }
            current = current.nextNode;
            requiredIndex++;
        }
        return undefined;
    }
}

class Node {
    constructor()
    {
        this.value = null;
        this.nextNode = null;
    }
}