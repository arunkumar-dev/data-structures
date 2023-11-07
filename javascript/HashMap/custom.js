class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set = (key, value) => {
    let hashKey = this._hash(key);
    if (!this.data[hashKey]) {
      this.data[hashKey] = [];
    }
    this.data[hashKey].push([key, value]);
  };

  get = (key) => {
    let hashKey = this._hash(key);
    let bucket = this.data[hashKey];
    if (bucket) {
      for (let item of bucket) {
        if (item[0] == key) return item[1];
      }
    }
    return undefined;
  };

  keys = () => {
    if (!this.data.length) {
        return undefined
      }
    let totalKeys = [];
    for (let item of this.data) {
      if (item) {
        let curKeys = item.map((value) =>value[0]);
        totalKeys = [].concat(totalKeys,curKeys);
      }
    }

    return totalKeys;
  };

  values = () => {
    if (!this.data.length) {
        return undefined
      }
    let totalValues = [];
    for (let item of this.data) {
      if (item) {
        let curKeys = item.map((value) =>value[1]);
        totalValues = [].concat(totalValues,curKeys);
      }
    }

    return totalValues;
  };

}

const myTable = new HashTable(2);
myTable.set("test", 11);
myTable.set("ds", 233);
myTable.set("asasasas", 3333);
// console.log(myTable.get("asasasas"));
console.log(myTable.keys());
console.log(myTable.values());
