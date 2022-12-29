const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const [S, P] = input.shift().map(Number);
const DNA = input[0].toString();
const [A, C, G, T] = input[1].map(Number);

function solution(S, P, DNA, A, C, G, T) {
  const check = () => {
    if (dict["A"] >= A && dict["C"] >= C && dict["G"] >= G && dict["T"] >= T)
      return true;
    else return false;
  };

  const dict = {};
  [dict["A"], dict["C"], dict["G"], dict["T"]] = [0, 0, 0, 0];
  let cnt = 0;
  for (let i = 0; i < P; i++) dict[DNA[i]] += 1;
  cnt = check() === true ? cnt + 1 : cnt;
  for (let j = 0; j < S - P; j++) {
    dict[DNA[j]] -= 1;
    dict[DNA[P + j]] += 1;
    cnt = check() === true ? cnt + 1 : cnt;
  }
  return cnt;
}

console.log(solution(S, P, DNA, A, C, G, T));
// const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// const length = input.slice(0,1).join().split(' ');
// const s = +length.slice(0,1);
// const p = +length.slice(1,2);
// const dnaArr = input.slice(1,2).join().split('')
// const checkArr = input.slice(2,3).join().split(' ').map(Number)
// let checkSecret = new Array(4).fill(0);
// let count = 0;
// let result = 0;

// const add = (i) => {
//   switch(i) {
//     case 'A':
//       checkSecret[0]++
//       if(checkSecret[0] == checkArr[0]) count++
//       break;
//     case 'C':
//       checkSecret[1]++
//       if(checkSecret[1] == checkArr[1]) count++
//       break;
//     case 'G':
//       checkSecret[2]++
//       if(checkSecret[2] == checkArr[2]) count++
//       break;
//     case 'T':
//       checkSecret[3]++
//       if(checkSecret[3] == checkArr[3]) count++
//       break;
//   }
// }

// const remove = (i) => {
//   switch(i) {
//     case 'A':
//       checkSecret[0]--
//       if(checkSecret[0] == checkArr[0]) count++
//       break;
//     case 'C':
//       checkSecret[1]--
//       if(checkSecret[1] == checkArr[1]) count++
//       break;
//     case 'G':
//       checkSecret[2]--
//       if(checkSecret[2] == checkArr[2]) count++
//       break;
//     case 'T':
//       checkSecret[3]--
//       if(checkSecret[3] == checkArr[3]) count++
//       break;
//   }
// }

// const zero = () => {
//   for(let i=0; i<4; i++) {
//   if(checkSecret[i] == 0 && checkArr[i] == 0) result++
// }
// }

// for(let i=0; i<p; i++) {
//   add(dnaArr[i])
// }

// for(let i=p; i<s; i++) {
//   const j = i-p;
//   add(dnaArr[i]);
//   remove(dnaArr[j]);
//   if(count == 4) result++
//   zero()
// }
// console.log(result);

