// const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// const [ materialSum ] = input.slice(1,2).map(Number)
// const materialSet = input.slice(2,3).join().split(' ').map(Number).sort();

// let start = 0;
// let end = materialSet.length -1;
// let count = 0;

// while(start < end) {
//     const sum = materialSet[start] + materialSet[end];

//     if( sum > materialSum) {
//         end -=1;
//     }
//     else if(sum < materialSum) {
//         start +=1
//     }
//     else {
//         count +=1;
//         start +=1;
//         end -=1;
//     }
// }
// return count;
const input = require("fs").readFileSync("example.txt").toString().split("\n");
  const N = +input[0];
  const M = +input[1];
  const materials = input[2].split(" ").map(v => +v).sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = N - 1;
  while (left < right) {
    let sum = materials[left] + materials[right];
    if (sum === M) {
      count++;
      left++;
    } else if (sum < M) {
      left++;
    } else {
      right--;
    }
  }

  console.log(count);




