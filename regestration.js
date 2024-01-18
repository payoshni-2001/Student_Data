let username=document.getElementById("un");
let email=document.getElementById("eml");
let pwd1=document.getElementById("pwd1");
let pwd2=document.getElementById("pwd2");
let phone=document.getElementById("phone");
console.log(username.value);
function CreateAccount()
{
    let un=username.value;
    // console.log(un);
    let emailId =email.value;
    // console.log(emailId);
    let phn=phone.value;
    // console.log(phn);
    let password1=pwd1.value;
    // console.log(password);
    let password2=pwd2.value;
    // console.log(password1)
    if(un!=""){
        if(password1===password2)
    {
        let userData=localStorage.setItem("userDetails",JSON.stringify(new reg(un,emailId,phn,password1)));
        open("login.html");
        //console.log(userData);
    }
    else
    {
        alert("Password does not match");
    }
    }
    else{
        alert("Enter the valid details") ;
    }
    // console.log((userData));
    //     un.value="";
    //     emailId.value="";
    //     phn.value="";
    //     password.value="";
    //     password1.value="";
    
    
    
}
function reg(un,emailId,phn,password)
{
    this.un=un;
    this.emailId=emailId;
    this.phn=phn;
    this.password=password;
}