class GitHub {
    constructor(){
        this.client_id = "96c6feaf5655b614549f";
        this.client_secret = "601df5ba5f92284e71fe526405867dfaeaacfa1f";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user} ?client_id = ${this.client_id} &client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos ? per_page=${this.repos_count} &sort=${this.repos_sort} &client_id = ${this.client_id} &client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            // profile: profileData
            profile,
            repos
        }
    }
}