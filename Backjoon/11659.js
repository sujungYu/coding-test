// 시간 초과
// const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// const arrLen = +input[0][0];
// let sum = 0;
// const arr = input[1].split(' ').map(v=>+v).map((v)=> {
//     sum+=v;
//     return sum;
// });
// for(let i=2; i<arrLen; i++) {
//     const s = +input[i][0];
//     const e = +input[i][2];
//     console.log(arr[s-2] ? arr[e-1] - arr[s-2] : arr[e-1])
// };
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const sumArr = []
let sum = 0;
const arr = input[1].split(' ').map(v=> +v).map((v)=> {
    sum+=v;
    return sum;
});
console.log(arr)
input.splice(2).forEach(ij=> {
    const [i, j] = ij.split(' ').map(v=> +v);
    console.log(arr[i-2] ? arr[j-1]-arr[i-2] : arr[j-1])
})
// for(let i=2; i<5; i++) {
//     const s = +input[i][0];
//     const e = +input[i][2];
//     console.log(arr[s-2] ? arr[e-1] - arr[s-2] : arr[e-1])
// };