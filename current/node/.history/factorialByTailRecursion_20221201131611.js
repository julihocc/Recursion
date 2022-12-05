// In tail recursion, it’s the opposite—the processing occurs before the recursive call. Choosing between the two recursive styles may seem arbitrary, but the choice can make all the difference.

const tailFactorial = (n, num) => {
  if (n===0) {
    return 
  } else {
    console.log(n, num)
  }
}

tailFactorial(5, 1)