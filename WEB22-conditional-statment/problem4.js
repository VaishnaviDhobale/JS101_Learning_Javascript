// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let regi_username='vaishu';
let regi_pass="12345";

let ent_username="vaishu";
let ent_pass="412345"

if(regi_username==ent_username){
  if(regi_pass==ent_pass){
    console.log("Login Sucessfully!");
  }else{
    console.log("You have enter wrong password");
  }
}else{
  console.log("you have enter wrong username");
}