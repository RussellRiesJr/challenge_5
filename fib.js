// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500

var fibonacci = [0, 1];

function loop() {
  var a = 0;
  var b = 1;
  var c = 1;
  for(var i = 0; c <= 376; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacci.push(c);
  }
};
loop();
console.log(fibonacci);