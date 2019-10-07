module.exports = 
function check(str, bracketsConfig) {
  let a = 0;
  let b = 0;
  let c = str.split("");
  let d = true;

  c.forEach(element => {
    if (element === "(") {
      a++;
    }
    if (element === ")") {
      a--;
      if (a < 0) {
        d = false;
      }
    }
    if (element === "[") {
      b++;
    }
    if (element === "]") {
      b--;
      if (b < 0) {
        d = false;
      }
    }
  });

  return d;
}

// console.log(check('())(', [['(', ')']]));