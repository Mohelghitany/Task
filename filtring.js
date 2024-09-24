function even(array) {
  return array.filter(function (value) {
    return value % 2 === 0;
  });
}


console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100])); // [2, 4, 6, 8, 10, 100]
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0])); // [2, 4, 6, 8, 10, 0]
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -100])); // [2, 4, 6, 8, 10, -100]