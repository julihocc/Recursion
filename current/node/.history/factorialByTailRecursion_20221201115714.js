const tailFactorial = (n, num=1) => {
    console.log(n," ",num)
    if (n===1) {
      return num
    } else {
      return tailFactorial(n-1, num*n)
    }
  }

  console.log(tailFactorial(5))