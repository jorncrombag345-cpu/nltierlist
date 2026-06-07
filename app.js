
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }
from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const firebaseConfig = {
 apiKey:'AIzaSyDm1vsdX5_QqfeEB5go9hTncKnaqqKHQf0',
 authDomain:'nltiers.firebaseapp.com',
 projectId:'nltiers',
 storageBucket:'nltiers.firebasestorage.app',
 messagingSenderId:'15766431640',
 appId:'1:15766431640:web:6bd529c17f03437d692ded'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn=document.getElementById('loginBtn');
const logoutBtn=document.getElementById('logoutBtn');
const adminPanel=document.getElementById('adminPanel');
const userInfo=document.getElementById('userInfo');

loginBtn.onclick=async()=>{
 try{
  await signInWithEmailAndPassword(
   auth,
   document.getElementById('email').value,
   document.getElementById('password').value
  );
 }catch(e){alert(e.message);}
};

logoutBtn.onclick=()=>signOut(auth);

onAuthStateChanged(auth,user=>{
 if(user){
  adminPanel.style.display='block';
  userInfo.innerHTML='Ingelogd als: '+user.email;
 }else{
  adminPanel.style.display='none';
  userInfo.innerHTML='Niet ingelogd';
 }
});
