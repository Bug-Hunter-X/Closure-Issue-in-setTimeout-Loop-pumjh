function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Immediately-invoked function expression (IIFE)
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, 1000);
    })(i);
  }
}

printNumbers2(5); // Prints 1 through 5 with delay

function printNumbers3(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i); // Here, the value of i is correctly captured with let. 
    }, 1000 * i);
  }
}

printNumbers3(5); // Prints 1 through 5 with delays.