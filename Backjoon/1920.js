const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number).sort((a, b) => a - b);
const M = +input[2];
const target = input[3].split(' ').map(Number);
const boolean = Array(M).fill(false)

for(let i=0; i<M; i++) {
  let start = 0;
  let end = N-1;
  while(start<=end) {
    let minIndex = Math.floor((start+end)/2);
    let minValue = A[minIndex];
    if(minValue < target[i]) {
      start = minIndex + 1;
    }
    else if(minValue > target[i]) {
      end = minIndex - 1;
    }
    else {
      boolean[i] = true;
      break;
    }
  }
}

const result = boolean.map((v) => v === true ? '1\n' : '0\n');
console.log(result.join(''));
