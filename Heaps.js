/* Heaps */

// left child: i * 2
// right child i *2 + 1
// parent: i / 2

class MinHeap {
    constructor() {
        this._heap = [null];
    }

    insert(...numbers) {
        for (let num of numbers) {
            this.insertOne(num);
        }
    }

    insertOne(num) {
        this._heap.push(num);
        if (this._heap.length > 2) {
            let idx = this._heap.length - 1;
            while (this._heap[idx] < this._heap[Math.floor(idx/2)]) {
                [this._heap[Math.floor(idx/2)], this._heap[idx]] = [this._heap[idx], this._heap[Math.floor(idx/2)]];
                if (Math.floor(idx/2) > 1) {
                    idx = Math.floor(idx/2);
                } else {
                    break;
                }
            }
        }
    }

    remove() {
        let smallest = this._heap[1];
        if (this._heap.length > 2) {
            this._heap[1] = this._heap[this._heap.length - 1];
            this._heap.splice(this._heap.length - 1);
            if (this._heap.length === 3) {
                if (this._heap[1] > this._heap[2]) {
                    [this._heap[1], this._heap[2]] = [this._heap[2], this._heap[1]];
                }
                return smallest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while ((this._heap[left] && this._heap[i] >= this._heap[left]) || (this._heap[right] && this._heap[i] >= this._heap[right])) {
                if (this._heap[left] && this._heap[i] >= this._heap[left]) {
                    [this._heap[i], this._heap[left]] = [this._heap[left], this._heap[i]];
                    i = 2 * i;
                } else if (this._heap[right] && this._heap[i] >= this._heap[right]) {
                    [this._heap[i], this._heap[right]] = [this._heap[right], this._heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this._heap[left] === undefined && this._heap[right] === undefined) {
                    break;
                }
            }
        } else if (this._heap.length === 2) {
            this._heap.splice(1, 1);
        } else {
            return null;
        }
        return smallest;
    }

    sort() {
        let result = [];
        while (this._heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    }

    get heap() {
        return this._heap;
    }
}

let myMinHeap = new MinHeap();
myMinHeap.insert(5,3,7,1,9); 
console.log(myMinHeap.heap); // [ null, 1, 3, 7, 5, 9 ]
myMinHeap.remove();
console.log(myMinHeap.heap); // [ null, 3, 5, 7, 9 ]
