let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// const [N] = input;// 오래걸림
const N = parseInt(input[0]); // 빠름
let count = 1;
let sum = 1;
let s_index = 1;
let e_index = 1;
let e_max = Math.ceil(N / 2);

while(s_index!=e_max) {
    if(sum==N) {
        count++;
        e_index++;
        sum+=e_index;
    } else if(sum>N) {
        sum -= s_index;
        s_index++;
    } else {
        e_index++;
        sum+=e_index;
    }
}
console.log(count);
