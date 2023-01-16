let sfirstName=document.getElementById("sfirstname");
let slastName=document.getElementById("slastname");
let sEmail=document.getElementById("semail");
let sPassword=document.getElementById("spassword");
let signupChk=document.getElementById("signup-btn");
let arr=[];
let obj={};

signupChk.addEventListener("click",signupChkFun);
function signupChkFun(event){
    count=0;
    event.preventDefault();
    let reg=/([a-zA-z])/ig;
    let emailVal=/^\S+@\S+\.\S+$/ig;
    if(!sfirstName.value.match(reg)){
        document.getElementById("sfirstnameErr").style.display="block";
        document.getElementById("sfirstnameErr").innerHTML="Please Enter the firstName";
    }else{
        obj.firstname=sfirstName.value;
        count++;
    }
    if(!slastName.value.match(reg)){
        document.getElementById("slastnameErr").style.display="block";
        document.getElementById("slastnameErr").innerHTML="please Enter the last name";
    }else{
        obj.lastname=slastName.value;
        count++;
    }
    if(!sEmail.value.match(emailVal)){
        document.getElementById("semailErr").style.display="block";
        document.getElementById("semailErr").innerHTML="please Enter a valid email";
    }else{
        obj.email=sEmail.value;
        count++;
    }
    if(sPassword.value===""){
        document.getElementById("spasswordErr").style.display="block";
        document.getElementById("spasswordErr").innerHTML="please Fill the password";
    }else{
        obj.password=sPassword.value;
        count++;
    }
    if(count>=4){
        localStorage.setItem("email",arr);
        arr.push(JSON.stringify(obj));
    }
}