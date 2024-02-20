const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="foto do perfil" />
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado '}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
            </div>
        </div>`

        let repositoriesItems = ""
        user.repositories.forEach(repo  =>  {
            repositoriesItems += `<li><a href="${repo.html_url}" target+"_blank">${repo.name}</a></li>`
            console.log(repositoriesItems)

        if(user.repositories.lenght > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2> Repositórios </h2>
                                            <ul>${repositoriesItems}</ul>
                                            </div>`
        }
        });
    }
}
export{screen}