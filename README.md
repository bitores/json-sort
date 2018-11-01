# json-sort
Sortable JSON


```
var obj = {
  a: {
    b: {
      c: {
        d: 1,
        e: null
      }
    }
  }
};

// json 按键排序
console.log(Object.sort(obj))

console.log(JSON.stringify(obj.sort()))
```