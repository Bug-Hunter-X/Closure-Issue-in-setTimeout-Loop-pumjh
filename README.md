# TypeScript Closure Issue in setTimeout Loop
This example demonstrates a common issue in JavaScript/TypeScript when using closures within `setTimeout` loops.  The variable `i` is not captured at the time each `setTimeout` is called, leading to unexpected output.

## Problem
The `printNumbers2` function attempts to print numbers 1 through `n` with a one-second delay using `setTimeout`. However, due to the closure's behavior, the value of `i` is captured only when the `setTimeout` callback finally executes, at which point the loop has already completed, resulting in the value of `i` always being `n+1`. 

## Solution
To solve this, we need to create a new scope and capture the value of `i` within it before calling `setTimeout`. This can be done using an immediately invoked function expression (IIFE) or a simple let declaration inside the loop.