// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_email="abc@gmail.com";
let stored_password="123456";
let input_email="abc@gmail.com";
let input_password="122345";
if(input_email==stored_email){
  if(input_password==stored_password){
    console.log("User can log in");
  }else{
    console.log("User cannot log in");
  }
}else{
  console.log("Wrong Credentials");
}