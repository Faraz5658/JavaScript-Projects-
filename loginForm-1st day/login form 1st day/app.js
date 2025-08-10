function showForm(){
    document.getElementById('loginForm').style.display="block";
}

function login(){
    const userName = document.getElementById("userName").value;
    if(userName){
        alert(`Welcome  ${userName} !`)
    }
    else{
        alert("plz enter userName");
    }
}