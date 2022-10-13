// Problem 1 : Given a string count the number of words in that string

let count=0;
let str="A song of ice and fire";
for(let i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    count++;
  }
}
if(str.length!=0){
  console.log(count+1);
}else{
  console.log(0);
}