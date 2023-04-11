function handleSingIn(){
    document.getElementById('errorUser').style.display = "none"
    document.getElementById('errorPassword').style.display = "none"  

    const login = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if(login == ""){
    document.getElementById('errorUser').style.display = "block" 
    return
    }

    if(password == ""){
        document.getElementById('errorPassword').style.display = "block" 
        return
        }

    if (login == "admin" && password == "admin"){
        document.getElementById('user').value = "";
        document.getElementById('password').value = "";
        alert('sucesso');
        
    } else{
        document.getElementById('user').value = "";
        document.getElementById('password').value = "";
        alert('Usuário e senha não encontrados, favor verificar e tentar novamente.');
    }
}