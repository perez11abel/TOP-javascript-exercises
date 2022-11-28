const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  };
fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci('1');
fibonacci('2');
fibonacci('8');
// Do not edit below this line
module.exports = fibonacci;



