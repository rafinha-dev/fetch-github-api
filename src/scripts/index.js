async function user(userNeme){
    const response = await fetch(`https://api.github.com/users/${userNeme}`)
    return await response.json()
}

// console.log( await user())
// await tirou o estado de pending

function getUserProfile(userName){
    user(userName).then((userData) => {

        // será preciso o avatar, o name e a bio.
        let userInfo = `<img src="${userData.avatar_url}" alt="foto do perfil" />
        <div class="data">
            <h1>${userData.name ?? 'Não possui nome cadastrado '}</h1>
            <p>${userData.bio ?? 'Não possui bio cadastrada'}</p>
        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo
    })
}

getUserProfile('dev-rafinha')