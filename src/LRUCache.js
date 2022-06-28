

class LRUCache {
    constructor(len) {
        this.length = len;
        this.data = new Map();
    }

    set(key, val) {
        if (this.data.has(key)){
            this.data.delete(key);
        }
        this.data.set(key, val);

        if (this.data.size > this.length) {
            let del = this.data.keys().next().value;
            this.data.delete(del);
        }
    }

    get (key) {
        if(this.data.has(key)){
            let val = this.data.get(key);
            this.data.delete(key);
            this.data.set(key, val);
            return val;
        }
        return null
    }
}
