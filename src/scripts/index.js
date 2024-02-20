document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)

})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserProfile(userName)
    }
})

async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

async function repos(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/repos`)
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

function getUserRepositories(userName){
    repos(userName).then(reposData => {
        let repositoriesItems = ""
            reposData.forEach(repo => {
                    repositoriesItems += `<li><a href="${repo.html_url}">${repo.name}</a></li>`
                })

                console.log(repositoriesItems)
            })
}
getUserRepositories('rafinha-dev')