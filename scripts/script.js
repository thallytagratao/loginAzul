function handleSingIn(){
    let login = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (login == "admin" && password == "admin"){
        alert('sucesso');
    }

}