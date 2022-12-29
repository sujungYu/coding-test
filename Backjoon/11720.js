const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

console.log(String(input).split('').map((v)=> Number(v)).reduce((sum,item)=> sum+item))

