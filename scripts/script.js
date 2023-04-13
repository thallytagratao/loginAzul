function handleOnLoad() {
    const user = {
        login: "admin",
        password: "1234",
    }

    localStorage.setItem("userData", JSON.stringify(user));
    const users = [
        {
            login: "user1",
            password: "1234",
        },
        {
            login: "user2",
            password: "1234",
        }
        ,
        {
            login: "admin",
            password: "1234",
        }
    ]


    localStorage.setItem("usersData", JSON.stringify(users));

    // const loginInput = "admin4"
    // const usersDataLocalStorage = JSON.parse(localStorage.getItem("usersData"))

    // console.log("usersDataLocalStorage => ", usersDataLocalStorage)

    // usersDataLocalStorage.map(user => {
    //     if (loginInput === user.login && passInput === user.password) {
    //         alert("Logado com sucesso")
    //     }
    // })
}

function handleSingIn() {



    document.getElementById('lds-spinner').style.display = "block"

    const userData = JSON.parse(localStorage.getItem("userData"))
    console.log(userData);



    setTimeout(() => {
        const usersDataLocalStorage = JSON.parse(localStorage.getItem("usersData"))

        console.log("usersDataLocalStorage => ", usersDataLocalStorage)



        document.getElementById('lds-spinner').style.display = "none"
        document.getElementById('errorUser').style.display = "none"
        document.getElementById('errorPassword').style.display = "none"

        const login = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        if (login == "") {
            document.getElementById('errorUser').style.display = "block"
            return
        }

        if (password == "") {
            document.getElementById('errorPassword').style.display = "block"
            return
        }


        usersDataLocalStorage.map(user => {
            if (login === user.login && password === user.password) {
                document.getElementById('user').value = "";
                document.getElementById('password').value = "";
                alert("Logado com sucesso")
                return;
            }

            alert("erro")
            return 
        })

        // if (login === userData.login && password === userData.password) {
        //     document.getElementById('user').value = "";
        //     document.getElementById('password').value = "";
        //     alert('sucesso');

        // } else {
        //     document.getElementById('user').value = "";
        //     document.getElementById('password').value = "";
        //     alert('Usuário e senha não encontrados, favor verificar e tentar novamente.');
        // }

    }, 1000);

}