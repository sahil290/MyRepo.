const numberSum = (n, a = n) => n ? numberSum(n = n - 1 , a = a + n) : a;

console.log(numberSum(10));

