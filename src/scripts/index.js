async function user(){
    const response = await fetch('https://api.github.com/users/rafinha-dev')
    return await response.json()
}

// console.log( await user())
// await tirou o estado de pending

function getUserProfile(){
    user().then((userData) => {

        // será preciso o avatar, o name e a bio.
        let userInfo = `<img src="${userData.avatar_url}" alt="foto do perfil" />
        <div class="data">
            <h1>${userData.name ?? 'Não possui nome cadastrado  '}</h1>
            <p>${userData.bio}</p>
        </div>`
    })
}

getUserProfile()