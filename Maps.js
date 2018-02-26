/* Maps */

class MyMap {
    constructor() {
        this.collection = {};
        this._count = 0;
    }

    size() {
        return this._count;
    }

    set(key, value) {
        this.collection[key] = value;
        this._count++;
    }

    has(key) {
        return (key in this.collection);
    }

    get(key) {
        return (key in this.collection) ? this.collection[key] : null;
    }

    delete(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
    }

    values() {
        let result = [];
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        }
        return (result.length > 0) ? result : null;
    }

    clear() {
        this.collection = {};
        this.count = 0;
    }
}

let map = new MyMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());
