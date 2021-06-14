import { requestGitRepo } from "../../requestGitPage.js";

export const changelogTxt = requestGitRepo("https://api.github.com/repos/JamesSheppardd/Portfolio/commits").then((commitData) =>{
    return[
        {
            'date': commitData[0].date,
            'text': commitData[0].message.message
        },
        {
            'date': commitData[1].date,
            'text': commitData[1].message.message
        },
        {
            'date': commitData[2].date,
            'text': commitData[2].message.message
        },
        {
            'date': commitData[3].date,
            'text': commitData[3].message.message
        },
        {
            'date': commitData[4].date,
            'text': commitData[4].message.message
        },
        {
            'date': commitData[5].date,
            'text': commitData[5].message.message
        },
        {
            'date': commitData[6].date,
            'text': commitData[6].message.message
        },
        {
            'date': commitData[7].date,
            'text': commitData[7].message.message
        },
        {
            'date': commitData[8].date,
            'text': commitData[8].message.message
        },
        {
            'date': commitData[9].date,
            'text': commitData[9].message.message
        },
        {
            'date': commitData[10].date,
            'text': commitData[10].message.message
        },
        {
            'date': commitData[11].date,
            'text': commitData[11].message.message
        },
        {
            'date': commitData[12].date,
            'text': commitData[12].message.message
        },
        
    ]

}).then(arr =>{
    var changelog = JSON.stringify(arr);
    localStorage.setItem("changelog", changelog);
    return changelogTxt
})