import { getRepositories } from "./services/repositories";
import { getUser } from "./services/user";
import { user } from "./objects/user";
import { screen } from "./objects/screen";


document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)

})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserData(userName)
    }
})
// console.log( await user())
// await tirou o estado de pending

async function getUserData(userName){

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    // getUser(userName).then((userData) => {
        
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
 
}

// function getUserRepositories(userName){
//     getRepositories(userName).then(reposData => {
//         let repositoriesItems = ""
//             reposData.forEach(repo => {
//                     repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
//                 })

//                 document.querySelector('.profile-data').innerHTML += `
//                                                                         <div class="repositories section">
//                                                                             <h2>Repositórios</h2>
//                                                                             <ul>${repositoriesItems}</ul>
//                                                                         </div>`

//             })
// }