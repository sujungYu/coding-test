const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const score = input[1].split(' ').map(val=>+val);
const maxVal = Math.max(...score);
const newScore = score.map(val => val/maxVal*100);
const sumScore = newScore.reduce((acc,cur)=> {return acc+cur});
console.log(sumScore/N);

