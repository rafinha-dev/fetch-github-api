
const user = { 
    avatarUrl: '',
    avatarName: '',
    bio: '',
    userName: '',
    repositories: [], 
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        // a segunda parte é do geito que está escrita pois é assim que ela vem do github
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    }, 
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }