Object.sort = function (obj) {
  return Object.keys(obj).sort().reduce((cur, next, index, arr) => {
    let value = obj[next],
      isLast = (index + 1 === arr.length) ? "" : ",";
    if (Object.prototype.toString.call(value) === "[object Object]") {
      return `${cur}${next}:{${Object.sort(value)}}${isLast}`
    }
    return `${cur}${next}:${value}${isLast}`
  }, "")
}

Object.prototype.sort = function () {
  let obj = this;
  return Object.keys(obj).sort().reduce((cur, next, index, arr) => {
    let value = obj[next];
    if (Object.prototype.toString.call(value) === "[object Object]") {
      cur[next] = value.sort();
      return cur;
    }
    cur[next] = value;
    return cur;
  }, {})
}