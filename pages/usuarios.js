async function receiveData() {
   const users = await fetch("http://localhost:3333/").then(response => response.json())

   users.map(persons => {
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

receiveData()