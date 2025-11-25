const button = document.querySelector("button")
button.addEventListener("click", receiveData)

async function receiveData() {
   const persons = await fetch("http://localhost:3333/").then(response => response.json())

   persons.map(persons => {
    document.querySelector("main").innerHTML += `
       <section>
            <h2>Name: ${persons.name}</h2>
            <p>E-mail: ${persons.email}</p>
            <p>Idade: ${persons.age}</p>
            <p>Nickname: ${persons.nickname}</p>
        </section>
    `
   })
}