let username=document.getElementById("un");
let pass=document.getElementById("pwd1");

function login()
{
    let uName=username.value;
    let password=pass.value;
    // console.log(uName);
    // console.log(password);
    let data=localStorage.getItem("userDetails");
    let userData=JSON.parse(data);
    // console.log(userData.un);
    // console.log(userData.password);
    if((uName===userData.un) &&(password===userData.password))
    {
        
        open("index.html");
    }
    else{
        alert("Invalid Credentials");
    }
}