/* Linked List */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }

    get size() {
        return this._length;
    }

    get head() {
        return this._head;
    }

    add(...element) {
        for(let ele of element) {
            this.addOne(ele);
        }
    }

    addOne(element) {
        let node = new Node(element);
        if (this._head === null) {
            this._head = node;
        } else {
            let currentNode = this._head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        
        this._length++;
    }

    remove(element) {
        let currentNode = this._head;
        let previousNode;
        if (currentNode.element === element) {
            this._head = currentNode.next;
            this._length--;
        } else {
            while(currentNode && currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            
            if (currentNode) {
                previousNode.next = currentNode.next;
                this._length--;
            }
        }
    }

    isEmpty() {
        return this._length === 0;
    }

    indexOf(element) {
        let currentNode = this._head;
        let index = -1;

        while(currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    elementAt(index) {
        let currentNode = this._head;
        let count = 0;

        if (index >= this._length || index < 0) {
            return null;
        }
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    addAt(index, element) {
        let node = new Node(element);
        let currentNode = this._head;
        let previousNode;
        let currentIndex = 0;

        if (index >= this._length || index < 0) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this._head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this._length++;
    }

    removeAt(index) {
        let currentNode = this._head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= this._length) {
            return null;
        } 

        if (index === 0) {
            this._head = currentNode.next;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this._length--;
        return currentNode.element;
    }
}

let conga = new LinkedList();
conga.add('Kitten', 'Puppy', 'Dog', 'Cat', 'Fish');

console.log(conga.size);  // 5
console.log(conga.removeAt(3));  // Cat
console.log(conga.elementAt(3)); // Fish
console.log(conga.size); // 4
console.log(conga.indexOf('Puppy')); // 1


