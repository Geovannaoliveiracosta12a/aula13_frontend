const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    login()
}

async function login(){
    const email = document.querySelector("#email").value

    const password = document.querySelector("#password").value

    if (email === "" || password === ""){
        alert("Preencha TODAS as informações!")
        return
    }

    const user = {
        email,
        password
    }

    const response = await fetch("https://aula13-backend.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(user)
    })

   // const data = await response.json()

    //alert(data.Message)

    //window.location.href = "../index.html"
}
