const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const stack = new Array();
const a = new Array();
let num = 1;

for(let i = 0; i < n; i++) {
  if(+input[i+1] >= num ) {
    while(+input[i+1] >= num) {
      a.push(num)
      stack.push('+\n');
      num++;
    }
    stack.push('-\n');
    a.pop();
  }
  else {
    const p = a.pop();
    if(p > +input[i+1]) {
      return console.log('NO');
    }
    else {
      stack.push('-\n');
    }
  }
}
const result = stack.join('');
console.log(result);