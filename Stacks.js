/* Stacks: first in, last out */

// functions: push, pop, peek,length

let letters = [];  //stack

let word = "racecar";

let rword = "";

// put letters of word into stack
for (let i=0; i<word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i=0; i<word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindromerome`);
}

// Creates a Stacks
class Stack {
    constructor() {
        this._count = 0;
        this.storage = {};
    }

    // Adds a value onto the end of the stack
    push(...value) {
        for (let item of value) {
            this.storage[this._count] = item;
            this._count++;
        }
    }

    // Removes and returns the value at the end of the stack
    pop() {
        if (this._count === 0) {
            return undefined;
        }

        this._count--;
        let result = this.storage[this._count];
        delete this.storage[this._count];
        return result;
    }

    size() {
        return this._count;
    }

    // Returns the value at the end of the stack
    peek() {
        return this.storage[this._count-1];
    }

}

let myStack = new Stack();

myStack.push(1,2,3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
