// Problem 2 : Given an array of string count the overall total number of characters

let total=0;
let arr=["Eren","Mikasa","Armin","Levi"];
for(let i=0;i<=arr.length-1;i++){
  total+=arr[i].length;
}
console.log(total);