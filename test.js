function diff(a, b) {
  console.log("diff function called");
  console.log("a:", a, "b:", b);
  return a + b;
}

const response = diff(5, 6);

console.log("Response:", response);

if (response === 10) {
  console.log("Test passed: The sum is correct.");
} else {
  console.log("Test failed: The sum is incorrect.");
  throw new Error("Test failed: The sum is incorrect.");
}
