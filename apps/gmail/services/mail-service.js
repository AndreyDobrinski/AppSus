
export const MailService = {
    query,
}

var gEmails;
_createEmails()


function query (){
    return gEmails
}

function _createEmails(){
    gEmails = getDemoEmails()
}


function getDemoEmails(){
    const defaultEmails = [

        {
            id: 'zzasd',
            title:'Email from Ajax'
        },
        {
            id: 'asdsadasd',
            title:'Invite to Vtuber'
        },
        {
            id: 'tyjghb',
            title:'Shoes on sale!'
        },


    ]
    return defaultEmails
}