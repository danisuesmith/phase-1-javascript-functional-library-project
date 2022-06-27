function myEach(collection, callback) {
  for (let accessor in collection) {
    callback(collection[accessor]);
  }
  return collection;
}

function myMap(collection, callback) {
  let newArray = [];
  for (let accessor in collection) {
    newArray.push(callback(collection[accessor]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let copy = [...collection];
  acc = acc || copy.shift();
  for (let accessor in copy) {
    acc = callback(acc, copy[accessor], copy);
  }
  return acc;
}
// need to use object.values?

function myFind(collection, callback) {
  for (let accessor in collection) {
    let element = collection[accessor];
    if (callback(element)) {
      return element;
    }
  }
}

function myFilter(collection, callback) {
  let selectedArray = [];

  for (let accessor in collection) {
    let element = collection[accessor];
    if (callback(element)) {
      selectedArray.push(element);
    }
  }
  return selectedArray;
}

function mySize(collection) {
  return Object.keys(collection).length;
}

function myFirst(collection, n = 1) {
  let count = 1;
  let array = [];

  for (let accessor in collection) {
    if (count <= n) {
      array.push(collection[accessor]);
      count++;
    }
  }
  return array.length > 1 ? array : array[0];
}

function myLast(collection, n = 1) {
  let startingIndex = collection.length - n;
  return n > 1
    ? collection.slice(startingIndex, collection.length)
    : collection[startingIndex];
}

function myKeys(keys) {
  let obj = Object.getOwnPropertyNames(keys);
  return obj;
}

function myValues(values) {
  let obj = Object.values(values);
  return obj;
}
