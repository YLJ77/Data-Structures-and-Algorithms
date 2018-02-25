/* Hash Table */

let hash = (string, max) => {
    let hash = 0;
    for (let i=0; i<string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 14;
    }

    print() {
        console.log(this.storage);
    }

    add(key, value) {
        let index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [
                [key, value]
            ];
        } else {
            let inserted = false;
            for (let i=0; i<this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][i] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }

    remove(key) {
        let index = hash(key, this.storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (let i=0; i<this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }

    lookup(key) {
        let index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        } else {
            for (let i=0; i<this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        } 
    }
}

console.log(hash('quincy', 10)); //5

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');

console.log(ht.lookup('tux'));  // penguin
ht.print();
/*
   [ <3 empty items>,
   [ [ 'tux', 'penguin' ] ],
   <3 empty items>,
   [ [ 'beau', 'person' ] ],
   <4 empty items>,
   [ [ 'fido', 'dog' ] ],
   [ [ 'rex', 'dinosour' ] ] ]
 * */
