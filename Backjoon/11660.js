// let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// input.shift();
// const arr =input.splice(0,4).map(a=>a.split(' ').map(b=>+b));
// const sumArr = [];
// input = input.map(v=>v.split(' ').map(Number));
// arr.forEach((v,i)=> sumArr[i]=v.slice(0));
// for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr[i].length; j++) {
//         if(j!=0) sumArr[i][j] += sumArr[i][j-1];
//         if(i!=0) sumArr[i][j] += sumArr[i-1][j];
//         if(j!=0 && i!=0) sumArr[i][j] -= sumArr[i-1][j-1]
//     }
// }
// input.forEach(([x1,y1,x2,y2])=> {
//     let answer = sumArr[x2-1][y2-1]
//     if (x1 != 1) answer -= sumArr[x1 - 2][y2 - 1];
//     if (y1 != 1) answer -= sumArr[x2 - 1][y1 - 2];
//     if (x1 != 1 && y1 != 1) answer += sumArr[x1 - 2][y1 - 2];
//     console.log(answer);
// })
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let arr = input.slice(0,N).map(a=>a.split(' ').map(Number));
input = input.splice(N).map(v=>v.split(' ').map(Number));
let answer = '';
let sumArr = new Array(N);
arr.forEach((v,i)=> sumArr[i]=v.slice(0));
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
        if(j!=0) sumArr[i][j] += sumArr[i][j-1];
        if(i!=0) sumArr[i][j] += sumArr[i-1][j];
        if(j!=0 && i!=0) sumArr[i][j] -= sumArr[i-1][j-1]
    }
}
input.forEach(([x1,y1,x2,y2])=> {
    let sum = sumArr[x2-1][y2-1]
    if (x1 != 1) sum -= sumArr[x1 - 2][y2 - 1];
    if (y1 != 1) sum -= sumArr[x2 - 1][y1 - 2];
    if (x1 != 1 && y1 != 1) sum += sumArr[x1 - 2][y1 - 2];
    answer+=`${sum}\n`;
})
console.log(answer.trim());