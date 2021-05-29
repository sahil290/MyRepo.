/*.
write a code to an integer N and print the sum of values from 1 to N.

Sample input = 10;

*/

const numberSum = (N) => {
  
    let total = 0;
    
      for(let i = 1; i <= N; i++){
        
        total += i;
        
      }
    
      return total;
  }
  console.log(numberSum(10));