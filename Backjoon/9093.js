let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for (i = 1; i < count + 1; i++) {
  world_array = input[i].split(' ');
  let return_word = [];
  for (let i in world_array) {
    let reverse_world = world_array[i].split("").reverse().join("");
    return_word.push(reverse_world)
  }
  console.log(return_word.join(" "));
}