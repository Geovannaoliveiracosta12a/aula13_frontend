const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    singUpEagle()
}

async function singUpEagle(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value
    const nickname = document.querySelector("#nickname").value
    const password = document.querySelector("#password").value

    if (name === "" || email === "" || age === "" || nickname === ""){
        alert("Preencha TODAS as informações!")
        return
    }

    const user = {
        name,
        email,
        age,
        nickname, 
        password
    }

    console.log(user)

    const response = await fetch("https://aula13-backend.vercel.app//cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(user)
    })

    const data = await response.json()

    alert(data.Message)

    window.location.href = "../index.html"
}
