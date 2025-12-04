function init() {
    const menu = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user){
        menu.innerHTML += `
        <li>
    <a href="./pages/usuarios.html">Usuário</a>
</li>

        <li>
                   <h2>Usuário: ${user.name}</h2>
                </li>
        <li>
                   <button>Sair</button>
                </li>
        `
        return
    }

    menu.innerHTML += `
    <li>
    <a href="./pages/login/login.html">Login</a>
</li>
    
    `
}
init()


 