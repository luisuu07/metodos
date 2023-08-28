sort

const arr = [2,4,6,8];
const alpha = ['d', 'c', 'b', 'a'];
const descendente = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descendente);
const ascendente = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascendente);