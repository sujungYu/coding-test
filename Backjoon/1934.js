const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const T = +input[0];
const A = input.slice(1,);
const lcm = [];

const gcd = (a,b) => {
  if(b === 0) return a;
  else return gcd(b, a % b);
}

for(let i=0; i<T; i++) {
  const [a,b] = A[i].split(' ').map(v => +v);
  const result = gcd(a,b);
  lcm.push(a * b / result);
}

console.log(lcm.join('\n'));
