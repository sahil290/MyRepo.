//const rep = (str) => {
   // return str.replace(/MANY/i,"NO");
//}
//console.log(rep("MANY corona cases"));

const repl = (str) => {
    return str.replace(/Dead/g,"Alive");
}
console.log(repl("corona is Dead"));