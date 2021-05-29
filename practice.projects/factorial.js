/* sample output = 5*/


const number = (5); 

let fact = 1;

for (let i = 1; i <= number; i++) {
    fact *= i;
}
console.log(fact);

/*
2nd method*/
function factorialize (num) {
    let fac = 1;
    for (let i = num; i > 0; i--) {
      fac*=i;
    }
    return fac;
  }
  factorialize(5);


  /*
  3rd method */

  const fact = (num) => {
      let fac = 1;
      for(let i = num; i > 0; i--) {
          fac *= i;
      }
      return fac;
  }
  console.log(fact(5));
  
