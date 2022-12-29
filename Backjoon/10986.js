let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').map(Number);
let sumArr = new Array(N);
let restArr = new Array(N);
let restAnswer = new Array(M).fill(0)
let answer = 0;
arr.forEach((v,i)=> i==0? sumArr[i]=v : sumArr[i] = v+sumArr[i-1]);
sumArr.forEach((v,i)=> restArr[i]=v%M);
for(let i=0; i<N; i++) {
    if(restArr[i]==0) {
        answer++;
    }
    restAnswer[restArr[i]]++
}
for(let i=0; i<M; i++) {
    if(restAnswer[i]>1) {
        answer = answer+(restAnswer[i]*(restAnswer[i]-1)/2)
    }
}
console.log(answer)
