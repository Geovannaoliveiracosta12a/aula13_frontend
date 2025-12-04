function init() {
    const menu = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user){
        menu.innerHTML += `
        <li>
    <a href="./pages/usuarios/usuarios.html">Usuário</a>
</li>

        <li>
         
            <h2>Usuário: ${user.name}</h2>
                   
                </li>
        <li>
                   <button id="logout">Sair</button>
                </li>
        `

        const logoutButton = document.querySelector("#logout")
        logoutButton.addEventListener("click", logout)
        return
    }

    menu.innerHTML += `
    <li>
    <a href="./pages/login/login.html">Login</a>
</li>
    
    `
}
init()

function logout(){
    sessionStorage.removeItem("user")
    alert("Você saiu!🎆")
    window.location.reload()
}


 