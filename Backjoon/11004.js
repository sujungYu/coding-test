const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

function swap(i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function partition(S, E, pivot) {
  swap(pivot, S);
  pivot = A[S];
  let i = S;
  let j = E;
  while(i < j) {
    while(pivot < A[j]) j--;
    while(i<j && pivot>=A[i]) i++;
    swap(i,j);
  }
  A[S] = A[i];
  A[i] = pivot;
}

function quickSort(S, E) {
  let pivot = Math.round((S+E)/2);
  if(S < E) {
    partition(S, E, pivot);
    if(pivot == K-1) return;
    else if(pivot > K-1) quickSort(S,pivot-1);
    quickSort(pivot+1, E);
  }
}

quickSort(0, N-1);
console.log(A[K-1]);

// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// const [N, K] = input[0].split(" ").map(v => Number(v));;
// const nums = input[1].split(" ").map(v => Number(v));

// nums.sort((a, b)=> a - b);

// console.log(nums[K-1]);



