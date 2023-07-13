function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = false;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      ++count;
    }
  }

  return count;
}


let start = performance.now();
for (let k = 0; k < 100; k++) {
  countPrimeNumbers();
}
let end = performance.now();

let amilli = end - start;
console.log(`Execution time of printing countPrimeNumbers was ${amilli} milliseconds.`);