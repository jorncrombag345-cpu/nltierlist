// Starter login/logout UI
const email=document.getElementById('email');
const password=document.getElementById('password');
const btn=document.getElementById('loginBtn');
const panel=document.getElementById('adminPanel');
let loggedIn=false;
btn.onclick=()=>{
 loggedIn=!loggedIn;
 if(loggedIn){
  email.style.display='none';
  password.style.display='none';
  btn.textContent='LOGOUT';
  btn.style.background='red';
  panel.style.display='block';
 }else{
  email.style.display='';
  password.style.display='';
  btn.textContent='LOGIN';
  btn.style.background='';
  panel.style.display='none';
 }
};
