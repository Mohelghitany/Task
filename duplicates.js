function unique(arr) {
  return Array.from(new Set(arr));
}


console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9,5,10,10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9,5,10,10,10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9,5,10,10,10,10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9,5,10,10,10,10,10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9,5,10,10,10,10,10,10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]