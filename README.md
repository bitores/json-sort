# json-sort
Sortable JSON

> npm i --save object-sortkeys

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