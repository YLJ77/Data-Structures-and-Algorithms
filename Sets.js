/* Sets */

class mySet {
    constructor() {
        // the collection will hold the set
        this.collection = [];
    }

    // this method will check for the presence of an element and return true or false
    has(ele) {
        return (this.collection.indexOf(ele) !== -1);
    }

    // this.method will return all the values in the set
    values() {
        return this.collection;
    }

    // this method will add an element to the Set 
    add(...ele) {
        for (let item of ele) {
            if(!this.has(item)) {
                this.collection.push(item);
            }
        }
    }

    // this method will remove an element from a set
    remove(ele) {
        if(this.has(ele)) {
            let index = this.collection.indexOf(ele);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // this method will return the size of the collection
    size() {
        return this.collection.length;
    }

    // this method will return the union of two Sets
    union(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(e=>{
            unionSet.add(e);
        });

        secondSet.forEach(e=>{
            unionSet.add(e);
        });

        return unionSet;
    }

    //this method will return the intersection of two sets as a new set
    intersection(otherSet) {
        let intersection = new mySet();
        let firstSet = this.values();

        firstSet.forEach(e=>{
            if(otherSet.has(e)) {
                intersection.add(e);
            }
        });

        return intersection;
    }

    // this method will return the difference of two sets as a new set
    difference(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(e=>{
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // this method will test if the set is a subset of a difference set
    subset(otherSet) {
        let firstSet = this.values();
        return firstSet.every(e=>{
            return otherSet.has(e);
        });
    }


}

let setA = new mySet();
let setB = new mySet();

setA.add('a');
setB.add('b', 'c', 'a', 'd');

console.log(setA.subset(setB));  // true
console.log(setA.intersection(setB).values());  // ['a']
console.log(setB.difference(setA).values());  //[ 'b', 'c', 'd' ]

let setC = new mySet();
let setD = new mySet();

setC.add('a');
setD.add('b', 'c', 'a', 'd');

console.log(setD.values());  //[ 'b', 'c', 'a', 'd' ]
setD.remove('a');
console.log(setD.has('a'));
