function greater(array){
    let greatest=-Infinity;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > greatest){
            greatest=array[i];
        }
    }
    return greatest;
}

console.log(greater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,100])); // 100
console.log(greater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,0])); // 10
console.log(greater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-100])); // 10
console.log(greater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,Infinity])); // Infinity
