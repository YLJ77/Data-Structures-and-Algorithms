/* Queues */

class Queue {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    enqueue(...ele) {
        this.collection.push(...ele);
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
}

let q = new Queue();
q.enqueue('a', 'b', 'c');
q.print();  //[ 'a', 'b', 'c' ]
q.dequeue();
q.print();  //[ 'b', 'c' ]
console.log(q.front());  //b

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    enqueue(...ele) {
        let sort = ele=> {
            if (this.isEmpty()) {
                this.collection.push(ele);
            } else {
                let added = false;
                for (let i=0; i<this.collection.length; i++) {
                    if (ele[1] < this.collection[i][1]) {
                        this.collection.splice(i,0,ele);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    this.collection.push(ele);
                }
            }
        }

        for (let item of ele) {
            sort(item);
        }

    }

    dequeue() {
        let value = this.collection.shift();
        return value[0];
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
}

let pq = new PriorityQueue();
pq.enqueue(
    ['Briana Swift', 2], 
    ['Ewa Mitulska-Wójcik', 1], 
    ['Quincy Larson', 3], 
    ['Beau Carnes', 2]
);
pq.print();
/*
   [ [ 'Ewa Mitulska-Wójcik', 1 ],
   [ 'Briana Swift', 2 ],
   [ 'Beau Carnes', 2 ],
   [ 'Quincy Larson', 3 ] ]

 */

pq.dequeue();
console.log(pq.front());
/*
 [ 'Briana Swift', 2 ]
 */
pq.print();
/*
   [ [ 'Briana Swift', 2 ],
   [ 'Beau Carnes', 2 ],
   [ 'Quincy Larson', 3 ] ]
;   */
