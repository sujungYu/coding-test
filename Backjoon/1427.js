const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const A = input[0].split('').map(Number);

for(let i=0; i<A.length; i++) {
  let max = i;
  for(let j=i+1; j<A.length; j++) {
    if(A[j] > A[max]) {
      max = j;
    }
  }
  if(A[max] > A[i]) {
    let temp = A[i];
    A[i] = A[max];
    A[max] = temp;
  }
}
const result = A.join('')
console.log(result);