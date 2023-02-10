const ackermann = (m, n) => {
  if (m === 0) {
    return n + 1;
  } else if (n === 0) {
    return ackermann(m - 1, 1);
  } else {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
}

console.log(ackermann(0, 4))
console.log(ackermann(4, 0))
console.log(ackermann(3, 3))
try {
  console.log(ackermann(4, 1))
} catch (error) {
  console.log(error);
}