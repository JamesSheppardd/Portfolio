export const requestGitRepo = async (repo) =>{
    const response = await fetch(repo);
    if(response.status === 200){
        // Success
        const data = await response.json();
        let commitData = [];
        await data.forEach((commit, i) => {
            let comDate = commit.commit.committer.date
            comDate = comDate.split('');
            comDate = comDate.splice(0, 10)
            comDate = comDate.join("")
           commitData[i] = 
           {
               'message': commit.commit,
               'date': comDate
           }
        });
        return commitData;
    } else {
        throw new Error(`Error: ${response.status}, ${response}`)
    }
}